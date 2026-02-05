export default function Avatar({ img, alt }) {
  return (
    <div className="avatar">
      <img src={img} alt={`image of ${alt}`} className="image" />
    </div>
  );
}
