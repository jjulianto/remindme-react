function Card({ image, title, description }) {
  return (
    <div className="card">
      <img
        src={`assets/images/${image}.png`}
        className="card-img"
        alt="schedule"
      />
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
