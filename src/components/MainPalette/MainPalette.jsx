import data from "../../files/Lab3/pallete.json";
import Pallete from "../Pallete/Pallete";
import "./MainPalette.css";
import { Link } from "react-router-dom";
const MainPalette = () => {
  const nash = data.map((el, id) => {
    return (
      <div>
        <Link to={`/palete/${id}`}>
          <Pallete data={el.colors} name={el.paletteName}></Pallete>
        </Link>
      </div>
    );
  });
  return (
    <div className="main-section">
      <div className="bg-main">{nash}</div>
    </div>
  );
};
export default MainPalette;
