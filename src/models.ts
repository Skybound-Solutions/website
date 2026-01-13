export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export type ProjectStatus =
  | "Discovery"
  | "Proposal"
  | "In Progress"
  | "On Hold"
  | "Completed"
  | "Archived";

export interface Project {
  id: string; // GitHub repo ID
  name: string;
  githubUrl: string;
  description: string | null;
  status: ProjectStatus;
  ownerId: string; // User UID
}

export type InvoiceStatus = "Draft" | "Sent" | "Paid";

export interface Invoice {
  id: string;
  projectId: string;
  title: string;
  lineItems: {
    description: string;
    rate: number;
    hours: number;
  }[];
  dueDate: Date;
  status: InvoiceStatus;
  createdAt: Date;
}
