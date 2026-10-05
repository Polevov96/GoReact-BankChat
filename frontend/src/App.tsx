import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import AgentCard from "./components/AgentCard";

type ProjectStatus = "Активный" | "На паузе" | "Завершён";
type AgentStatus = "Активный" | "Не активный";
type ProjectFilter = "Все" | ProjectStatus;

type Project = {
  id: number;
  name: string;
  status: ProjectStatus;
  progress: number;
};

type Agent = {
  id: number;
  name: string;
  role: string;
  status: AgentStatus;
};

type ProjectFilterOption = {
  value: ProjectFilter;
  label: string;
};

function App() {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("Все");

  const projects: Project[] = [
    {
      id: 1,
      name: "NOVERA",
      status: "Активный",
      progress: 72,
    },
    {
      id: 2,
      name: "NEXORA",
      status: "Активный",
      progress: 11,
    },
    {
      id: 3,
      name: "NIXORA",
      status: "На паузе",
      progress: 22,
    },
    {
      id: 4,
      name: "BankChat",
      status: "Завершён",
      progress: 55,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    return projectFilter === "Все" || project.status === projectFilter;
  });

  const activeProjectsCount = projects.filter((project) => {
    return project.status === "Активный";
  }).length;

  const agents: Agent[] = [
    {
      id: 1,
      name: "NOVERA",
      status: "Активный",
      role: "Дизайнер",
    },
    {
      id: 2,
      name: "NEXORA",
      status: "Активный",
      role: "Тестировщик",
    },
    {
      id: 3,
      name: "NIXORA",
      status: "Активный",
      role: "Проект менеджер",
    },
    {
      id: 4,
      name: "BankChat",
      status: "Не активный",
      role: "Разработчик",
    },
  ];

  const activeAgentsCount = agents.filter((agent) => {
    return agent.status === "Активный";
  }).length;

  const projectFilters: ProjectFilterOption[] = [
    {
      value: "Все",
      label: "Все",
    },
    {
      value: "Активный",
      label: "Активные",
    },
    {
      value: "На паузе",
      label: "На паузе",
    },
    {
      value: "Завершён",
      label: "Завершённые",
    },
  ];

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <p className="page-eyebrow">Главная</p>
        <h1 className="page-title">Добрый день</h1>

        <p className="page-description">
          {" "}
          Ваше пространство для проектов, команды и AI-агентов.
        </p>

        <div className="stats">
          <StatCard title="Активные проекты" value={activeProjectsCount} />
          <StatCard title="Требуют внимания" value={7} />
          <StatCard title="Активные агенты" value={activeAgentsCount} />
          <StatCard title="Расходы проектов" value="€842" />
        </div>

        <h2>Продолжить работу</h2>
        <div className="project-filters">
          {projectFilters.map((filterStatus) => (
            <button
              key={filterStatus.value}
              className={
                projectFilter === filterStatus.value
                  ? "filter-button filter-button--active"
                  : "filter-button"
              }
              onClick={() => setProjectFilter(filterStatus.value)}
            >
              {filterStatus.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              status={project.status}
              progress={project.progress}
            />
          ))}
        </div>

        <h2>Команда ИИ</h2>
        <div className="agents-grid">
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              status={agent.status}
              role={agent.role}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
