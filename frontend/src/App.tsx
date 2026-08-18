import './App.css'

function App() {

  return (
 
    <div className="app">

      <aside className="sidebar">

        <div className="brand">

          <div className="brand-mark">
            N
          </div>

          <div className="brand-text">
            <p className="brand-name">
              NOVERA
            </p>

            <p className="brand-subtitle">
              BANKING & WORKSPACE
            </p>
          </div>
        </div>

        <nav
          className="sidebar-nav"
          aria-label="Основная навигация"
        >
          <a
            className="nav-item nav-item--active"
            href="#"
            aria-current="page"
          >
            Главная
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Счета
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Переводы
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Проекты
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Чаты
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Аналитика
          </a>
        </nav>


        <nav
          className="sidebar-nav sidebar-nav--secondary"
          aria-label="Дополнительная навигация"
        >
          <a
            className="nav-item"
            href="#"
          >
            Команда
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Уведомления
          </a>

          <a
            className="nav-item"
            href="#"
          >
            Настройки
          </a>
        </nav>
      </aside>

      <main className="main-content">

        <p className="page-eyebrow">
          Главная
        </p>

        <h1 className="page-title">
          Добрый день
        </h1>

        <p className="page-description">
          Ваше единое пространство для банкинга, проектов и общения.
        </p>
      </main>
    </div>
  )
}

export default App