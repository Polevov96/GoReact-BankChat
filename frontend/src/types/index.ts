export type ProjectStatus = "Активный" | "На паузе" | "Завершён";

export type AgentStatus = "Активный" | "Не активный";

export type ProjectFilter = "Все" | ProjectStatus;

export type Project = {
  id: number;
  name: string;
  status: ProjectStatus;
  progress: number;
};

export type Agent = {
  id: number;
  name: string;
  role: string;
  status: AgentStatus;
};

export type ProjectFilterOption = {
  value: ProjectFilter;
  label: string;
};
