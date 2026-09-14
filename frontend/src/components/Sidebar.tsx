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
        <a className="nav-item nav-item--active" href="#" aria-current="page">
          Главная
        </a>

        <a className="nav-item" href="#">
          Проекты
        </a>
        <a className="nav-item" href="#">
          Чаты
        </a>
        <a className="nav-item" href="#">
          Агенты
        </a>

        <a className="nav-item" href="#">
          Аналитика
        </a>
      </nav>

      <nav
        className="sidebar-nav sidebar-nav--secondary"
        aria-label="Дополнительная навигация"
      >
        <a className="nav-item" href="#">
          Уведомления
        </a>

        <a className="nav-item" href="#">
          Настройки
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
