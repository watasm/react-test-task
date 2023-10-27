import Table from "react-bootstrap/Table";
import { useUserContext } from "../../contexts/userContext";
import TimesheetsModal from "../UI/TimeSheetsModal";
import { useTimesheetContext } from "../../contexts/timeSheetContext";
import { useState } from "react";
import { User } from "../../types/userTypes";
import { TimesheetType } from "../../types/timesheetsTypes";
import React from "react";

export default function UsersTable(): JSX.Element {
  const { users } = useUserContext();
  const { timesheets } = useTimesheetContext();
  const [selectedUser, setSelectedUser] = useState<User>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [filteredTimesheets, setFilteredTimesheets] = useState<TimesheetType[]>(
    []
  );

  const openModal = (user: User) => {
    const filteredTimesheets = timesheets.filter(
      (timesheet) => timesheet.userId === user.id
    );
    setFilteredTimesheets(filteredTimesheets);
    setSelectedUser(() => user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Table responsive bordered hover className="table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Avatar</th>
            <th>City</th>
            <th>Country</th>
            <th>Department</th>
            <th>Division</th>
            <th>Manager ID</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} onClick={() => openModal(user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.position}</td>
              <td>{user.phone}</td>
              <td>{user.avatar.link ? "assigned" : "n/a"}</td>
              <td>{user.city || "n/a"}</td>
              <td>{user.country || "n/a"}</td>
              <td>{user.department?.title || "n/a"}</td>
              <td>{user.division?.title || "n/a"}</td>
              <td>{user.manager?.id || "n/a"}</td>
              <td>{user.group || "n/a"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedUser && (
        <TimesheetsModal
          show={showModal}
          onHide={closeModal}
          filteredTimesheets={filteredTimesheets}
        />
      )}
    </>
  );
}
