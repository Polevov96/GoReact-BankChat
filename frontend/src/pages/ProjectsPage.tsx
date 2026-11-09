import { useState } from "react";

import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";

import type { ProjectFilter } from "../types";

function ProjectsPage() {
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("Все");

  const filteredProjects = projects.filter((project) => {
    return projectFilter === "Все" || project.status === projectFilter;
  });

  return (
    <div>
      <h1 className="page-title">Проекты</h1>

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
    </div>
  );
}

export default ProjectsPage;
