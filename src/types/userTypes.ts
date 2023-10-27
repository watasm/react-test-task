export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  country: null | string;
  subDepartment?: SubDepartment;
  manager?: Manager;
  avatar: Avatar;
  department: Department;
  group: null;
  division?: Division;
};

export type SubDepartment = {
  id: string;
  title: string;
};

export type Manager = {
  id: string;
  firstName: string;
  lastName: string;
  archivedAt: null;
  email: string;
  phone: string;
  position: string;
  avatar?: Avatar;
};

export type Avatar = {
  link: string;
};

export interface Department {
  id: string;
  title: string;
  managerId: string;
}

export type Division = {
  id: string;
  title: string;
  managerId: string;
};