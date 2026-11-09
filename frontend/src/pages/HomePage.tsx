import { useState } from "react";
import StatCard from "../components/StatCard";
import ProjectCard from "../components/ProjectCard";
import AgentCard from "../components/AgentCard";
import { projects } from "../data/projects";
import type { ProjectFilter, Agent } from "../types";
import ProjectFilters from "../components/ProjectFilters";

function HomePage() {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("Все");

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

  return (
    <div>
      <p className="page-eyebrow">Главная</p>
      <h1 className="page-title">Добрый день</h1>

      <p className="page-description">
        Ваше пространство для проектов, команды и AI-агентов.
      </p>

      <div className="stats">
        <StatCard title="Активные проекты" value={activeProjectsCount} />
        <StatCard title="Требуют внимания" value={7} />
        <StatCard title="Активные агенты" value={activeAgentsCount} />
        <StatCard title="Расходы проектов" value="€842" />
      </div>

      <h2>Продолжить работу</h2>
      <ProjectFilters value={projectFilter} onChange={setProjectFilter} />

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
    </div>
  );
}

export default HomePage;
