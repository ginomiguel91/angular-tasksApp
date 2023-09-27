export interface Task {
  id: number;
  title: string;
  description: string;
  createAt: Date;
  ecDate: Date;
  finished: boolean;
  status?: string;
}
