import React from "react";
import { Table } from "react-bootstrap";
import { TimesheetType } from "../../types/timesheetsTypes";

type TimesheetTableProps = {
  timesheets: TimesheetType[];
};

export default function TimesheetTable({
  timesheets,
}: TimesheetTableProps): JSX.Element {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Assessment</th>
          <th>Break Minutes</th>
          <th>Minutes</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {timesheets?.map((timesheet) => (
          <tr key={timesheet.id}>
            <td>{timesheet.assessment}</td>
            <td>{timesheet.breakMinutes}</td>
            <td>{timesheet.minutes}</td>
            <td>{timesheet.startTime}</td>
            <td>{timesheet.endTime}</td>
            <td>{timesheet.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
