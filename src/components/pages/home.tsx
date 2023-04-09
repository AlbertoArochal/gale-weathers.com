import galemicro from "../../../src/assets/img/galemicro.gif";
export const Home = () => {
  return (
    <div className="home">
      <section className="home__container">
        <h1 className="home__title">Welcome!</h1>
        <section className="home__description">
          <p>
            Hi everyone! This is Gale Weathers, reporting live from your very
            own computer. If this is your first time logging on, have no fear:
            you will not be disappointed. My new personal web page has an advice
            column, interviews, my book club, and everything you've ever wanted
            to know about yours truly! Plus the hard-hitting journalism you have
            come to expect from a future Pulitzer-Prize winner. Before long, you
            will all be asking: "Oprah who?"
          </p>
          <img src={galemicro} alt="Gale holding a micro" />
        </section>
      </section>
    </div>
  );
};
