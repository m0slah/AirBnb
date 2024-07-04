import star from "../assets/Images/star.png";

export default function Card({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
}) {
  return (
    <div className="card">
      <img src={img} className="card--image" alt="Main card image." />
      <div className="card--stats">
        <img src={star} className="card--star" alt="Star icon." />
        <span>{rating}</span>
        <span className="gray">{reviewCount} • </span>
        <span className="gray">({country})</span>
      </div>
      <h2>{title}</h2>
      <p>
        <span className="bold">{price}</span> / person
      </p>
    </div>
  );
}
