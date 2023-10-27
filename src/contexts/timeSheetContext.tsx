/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { TimesheetType } from "../types/timesheetsTypes";
import axios from "axios";

type TimesheetContextProps = {
  timesheets: TimesheetType[];
  setTimesheets: React.Dispatch<React.SetStateAction<TimesheetType[]>>;
};

const TimesheetContext = createContext<TimesheetContextProps | undefined>(
  undefined
);

type TimesheetProviderProps = {
  children: ReactNode;
  initialTimeSheets: TimesheetType[];
};

export function TimesheetProvider({
  children,
  initialTimeSheets,
}: TimesheetProviderProps): JSX.Element {
  const [timesheets, setTimesheets] =
    useState<TimesheetType[]>(initialTimeSheets);

  useEffect(() => {
    const fetchAllTimesheets = async () => {
      try {
        const response = await axios.get("../../timesheets.json");
        setTimesheets(response.data);
      } catch (error) {
        console.error("Error fetching timesheets:", error);
      }
    };

    fetchAllTimesheets();
  }, []);

  return (
    <TimesheetContext.Provider value={{ timesheets, setTimesheets }}>
      {children}
    </TimesheetContext.Provider>
  );
}

export const useTimesheetContext = () => {
  const context = useContext(TimesheetContext);
  if (!context) {
    throw new Error(
      "useTimesheetContext must be used within a TimesheetProvider"
    );
  }
  return context;
};
