export type TimesheetType = {
  id: string;
  assessment: number;
  breakMinutes: number;
  minutes: number;
  startTime: string;
  endTime: string;
  note?: string;
  status: string;
  locationChecked: boolean;
  approvalPersonId?: string;
  userId: string;
  companyId: string;
};