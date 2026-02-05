export default function Intro(props) {
  return (
    <div className="intro">
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}
