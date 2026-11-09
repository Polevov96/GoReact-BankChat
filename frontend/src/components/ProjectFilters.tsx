import type { ProjectFilter } from "../types";
import { projectFilters } from "../data/projectFilters";

type ProjectFiltersProps = {
  value: ProjectFilter;
  onChange: (value: ProjectFilter) => void;
};

function ProjectFilters({ value, onChange }: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      <p>{value}</p>
      {projectFilters.map((filterStatus) => (
        <button
          className={
            value === filterStatus.value
              ? "filter-button filter-button--active"
              : "filter-button"
          }
          key={filterStatus.value}
          onClick={() => onChange(filterStatus.value)}
        >
          {filterStatus.label}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
