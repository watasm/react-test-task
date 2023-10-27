import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { TimesheetType } from "../../types/timesheetsTypes";
import TimesheetTable from "./TimeSheetsTable";

type TimesheetsModalProps = {
  show: boolean;
  onHide: () => void;
  filteredTimesheets: TimesheetType[];
};

export default function TimesheetsModal({
  show,
  onHide,
  filteredTimesheets,
}: TimesheetsModalProps): JSX.Element {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
  };
  const resetMonth = () => {
    setSelectedMonth("");
  };

  const filteredTimesheetsByMonth = filteredTimesheets.filter((timesheet) => {
    if (!selectedMonth) {
      return true;
    }
    const monthRegex = new RegExp(`-${selectedMonth}-`);
    const formattedStartTime = monthRegex.test(timesheet.startTime);

    return formattedStartTime;
  });

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Timesheets</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DropdownButton
          id="month-dropdown"
          title={selectedMonth || "Select Month"}
          onSelect={(eventKey) => {
            if (eventKey) {
              handleMonthSelect(eventKey.toString());
            }
          }}
        >
          <Dropdown.Item onClick={() => handleMonthSelect("01")}>
            January
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("02")}>
            February
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("03")}>
            March
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("04")}>
            April
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("05")}>
            May
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("06")}>
            June
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("07")}>
            July
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("08")}>
            August
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("09")}>
            September
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("10")}>
            October
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("11")}>
            November
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleMonthSelect("12")}>
            December
          </Dropdown.Item>
        </DropdownButton>
        <Button variant="secondary" onClick={resetMonth}>
          Reset
        </Button>
        <TimesheetTable timesheets={filteredTimesheetsByMonth} />
      </Modal.Body>
    </Modal>
  );
}
