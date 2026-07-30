export type TaskPriority = "low" | "medium" | "high";

export type StudyTask = {
  id: string;
  title: string;
  subject: string;
  description?: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
};
