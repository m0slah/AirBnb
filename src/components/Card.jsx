import swim from "../assets/Images/swim.png";
import star from "../assets/Images/star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={swim} className="card--image" alt="Main card image." />
      <div className="card--stats">
        <img src={star} className="card--star" alt="Star icon." />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <h2>Life Lessons with Katie Zaferes</h2>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
