export interface Employee {
  id: number;
  name: string;
  designation: string;
  salary: number;
  Status: Status;
}

enum Status{
    Active = 'Active',
    Inactive = 'Inactive',
    OnLeave = 'On Leave'
}
