type ProjectCardProps = {
  name: string;
  status: string;
  progress: number;
};

function ProjectCard({ name, status, progress }: ProjectCardProps) {
  return (
    <div className="project-card">
      <p className="project-card__name">{name}</p>
      <strong className="project-card__status">{status}</strong>
      <strong className="project-card__progress">{progress}%</strong>
    </div>
  );
}

export default ProjectCard;
