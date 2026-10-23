
function Statistics({publicacionesCuenta}) {

const statistics = [
  { value: publicacionesCuenta, label: "Publicaciones" },
  { value: "0", label: "Seguidores" },
  { value: "0", label: "Siguiendo" },
];


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
