import Card from "./components/Card";
import "./index.css";
import developers from "./Data";

export default function App() {
  return (
    <div className="cardGrid">
      {developers.map((dev, index) => (
        <Card key={index} {...dev} />
      ))}
    </div>
  );
}
