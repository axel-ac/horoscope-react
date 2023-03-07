const Card = (data) => {
  return (
    <div className="cards">
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="data">
        <h1>{data.data}</h1>
      </div>
      <img src={data.image} alt="image" />
      <div className="card-over">
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
