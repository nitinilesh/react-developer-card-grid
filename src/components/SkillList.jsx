export default function SkillList({ skills }) {
  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          {skill}
        </div>
      ))}
    </div>
  );
}
