type AgentCardProps = {
  name: string;
  role: string;
  status: string;
};

function AgentCard({ name, role, status }: AgentCardProps) {
  return (
    <div className="agent-card">
      <p className="agent-card__name">{name}</p>
      <strong className="agent-card__role">{role}</strong>
      <strong className="agent-card__status">{status}</strong>
    </div>
  );
}

export default AgentCard;
