import { Link } from "react-router";
import "./NotFoundPage.css";
function NotFoundPage() {
  return (
    <div className="not-found">
      <h1 className="not-found__code">404</h1>
      <h2>Страница не найдена</h2>
      <p>Возможно, адрес указан неправильно.</p>
      <Link to="/" className="not-found__link">
        На Главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
