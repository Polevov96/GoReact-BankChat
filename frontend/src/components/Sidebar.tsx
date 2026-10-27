import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">N</div>

        <div className="brand-text">
          <p className="brand-name">NOVERA</p>

          <p className="brand-subtitle">ИНТЕЛЛЕКТУАЛЬНОЕ ПРОСТРАНСТВО</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Основная навигация">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Проекты
        </NavLink>
        <NavLink
          to="/chats"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Чаты
        </NavLink>
        <NavLink
          to="/agents"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Агенты
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Аналитика
        </NavLink>
      </nav>

      <nav
        className="sidebar-nav sidebar-nav--secondary"
        aria-label="Дополнительная навигация"
      >
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Уведомления
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-item nav-item--active" : "nav-item"
          }
        >
          Настройки
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
