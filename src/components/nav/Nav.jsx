import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="navigation-container-fon">
        <div className="navigation-container-fon-container">
          <Link to={`/`}>
            <h1>M_Colors</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
