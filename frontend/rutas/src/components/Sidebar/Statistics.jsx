const statistics = [
  { value: "12", label: "Publicaciones" },
  { value: "248", label: "Seguidores" },
  { value: "180", label: "Siguiendo" },
];

function Statistics() {
  return (
    <section className="sidebar__card" aria-labelledby="statistics-title">
      <h2 className="sidebar__title" id="statistics-title">
        Mis estadísticas
      </h2>
      <dl className="sidebar__statistics">
        {statistics.map(({ value, label }) => (
          <div className="sidebar__statistic" key={label}>
            <dt className="sidebar__statistic-value">{value}</dt>
            <dd className="sidebar__statistic-label">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Statistics;
