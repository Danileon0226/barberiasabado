import "./Home.css";
export function Home() {


  return (
    <>
      <section className="banner text-white fw-bold">
        <h2>THE BARBER SHOP...</h2>
      </section>
      <section>
        <div className="container my-5"></div>
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>Titulo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              labore reprehenderit debitis dolor, soluta voluptatum nam culpa
              laudantium accusamus tempore corporis voluptates iste officia
              velit ratione nostrum aliquam odit explicabo!
            </p>
          </div>

          <div className="col-12 col-md-4">
            <img
              src="../../src/assets/img/corte.jpg"
              alt=""
              className="img-fluid w-100"
            />
          </div>
        </div>
          </section>
          <section className="banner2">
              
          </section>
    </>
  );
}
