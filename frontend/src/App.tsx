import "./App.css";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";

function App() {
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
      </main>
    </div>
  );
}

export default App;
