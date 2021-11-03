function Testimonial() {
  return (
    <section>
      <div className="task-container container">
        <div className="testimonial-img">
          <img
            src="assets/images/testimonial.png"
            className="testimonial-blog-img"
            alt="testimonial"
          />
        </div>
        <div className="testimonial-content">
          <h1 className="testimonial-title">What do they think</h1>
          <div className="testimonial-card">
            <img
              src="assets/images/profile.png"
              className="testimonial-card-blog-img"
              alt="testimonial-profile"
            />
            <p className="testimonial-card-title">
              <span className="testimonial-card-title-span">
                Samantha Sench
              </span>
              <br /> Student at University
            </p>
          </div>
          <p className="testimonial-description">
            “ Hi, it’s Samantha. After using it made me a lot of benefits,
            starting with convenience of setting a deadline of tasks and
            schedule after that the app is very simple using. “
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
