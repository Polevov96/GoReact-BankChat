import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatsPage from "./pages/ChatsPage";
import HomePage from "./pages/HomePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AgentsPage from "./pages/AgentsPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";

import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
