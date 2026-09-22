import "./App.css";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import AgentCard from "./components/AgentCard";

type Project = {
  id: number;
  name: string;
  status: string;
  progress: number;
};
type Agent = {
  id: number;
  name: string;
  role: string;
  status: string;
};
function App() {
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
      status: "Активный",
      progress: 22,
    },
    {
      id: 4,
      name: "BankChat",
      status: "Активный",
      progress: 55,
    },
  ];
  const Agents: Agent[] = [
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
      status: "Активный",
      role: "Разработчик",
    },
  ];

  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <p className="page-eyebrow">Главная</p>

        <h1 className="page-title">Добрый день</h1>

        <p className="page-description">
          Ваше пространство для проектов, команды и AI-агентов.
        </p>

        <div className="stats">
          <StatCard title="Активные проекты" value={4} />
          <StatCard title="Требуют внимания" value={7} />
          <StatCard title="Активные агенты" value={6} />
          <StatCard title="Расходы проектов" value="€842" />
        </div>
        <h2>Продолжить работу</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              status={project.status}
              progress={project.progress}
            />
          ))}
        </div>
        <h2>Команда ИИ</h2>
        <div className="Agents-grid">
          {Agents.map((Agent) => (
            <AgentCard
              key={Agent.id}
              name={Agent.name}
              status={Agent.status}
              role={Agent.role}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
