
import styles from "./Servicios.module.css";

function Servicios() {
  const servicios = [
    {
      id: 1,
      name: "Artists",
      image: "../../../src/assets/img/Barbas.jpg",
      description: "Discover new and popular artists in different genres.",
    },
    {
      id: 2,
      name: "Playlists",
      image: "../../../src/assets/img/Barbas.jpg",
      description:
        "Listen to handcrafted playlists for every mood and occasion.",
    },
    {
      id: 3,
      name: "Instruments",
      image: "../../../src/assets/img/Barbas.jpg",
      description:
        "Learn about different musical instruments and how they are played.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-12">
          <div className={styles["cards-container"]}>
            {servicios.map((servicio) => (
              <div className={styles.card} key={servicio.id}>
                <img
                  src={servicio.image}
                  className="img-fluid w-100"
                  alt={servicio.name}
                />
                <div className={styles["card-body"]}>
                  <h3 className={styles["card-title"]}>{servicio.name}</h3>
                  <p className={styles["card-text"]}>{servicio.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-12">
        <h1>POR FAVOR ESTUDIEN</h1>
      </div>
    </div>
  );
}

export default Servicios;
