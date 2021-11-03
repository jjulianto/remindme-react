function Home() {
  return (
    <section className="home-background">
      <div className="home-container container">
        <div className="home-content">
          <h1 className="home-title">
            Manage <br /> Schedule and <br /> Task Easy
          </h1>
          <p className="home-description">
            Create and organize schedule and task deadline become <br /> better,
            easy manage and certainly no longer lagging <br /> behind schedule
            of activities and task
          </p>
          <a href="/" className="button">
            {" "}
            Download App{" "}
          </a>
        </div>
        <div className="home-img">
          <div className="home-card-easy">
            <p className="home-card-description">
              <span>Easy</span> to use
            </p>
          </div>
          <div className="home-card-interesting">
            <p className="home-card-description">
              An interesting <span>UI</span>
            </p>
          </div>
          <div className="home-card-user">
            <p className="home-card-title">
              <img
                src="assets/images/user.png"
                className="home-card-image"
                alt="user"
              />{" "}
              User Download
            </p>
            <p className="home-card-description-user">50.000</p>
          </div>
          <img
            src="assets/images/phone.png"
            className="home-blog-img"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
