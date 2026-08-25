type StatCardProps = {
  title: string;
  value: string | number;
};

function StatCard(props: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-card__title">{props.title}</p>
      <strong className="stat-card__value">{props.value}</strong>
    </div>
  );
}

export default StatCard;
