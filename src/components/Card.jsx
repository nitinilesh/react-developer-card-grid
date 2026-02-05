import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

export default function Card({ img, name, description, skills }) {
  return (
    <div className="card">
      <Avatar img={img} alt={name} />
      <Intro name={name} description={description} />
      <SkillList skills={skills} />
    </div>
  );
}
