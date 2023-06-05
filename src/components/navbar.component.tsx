import ConvoIcon from "../media/icons/convo.svg";
import style from "./styles/navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={style.class}>
        <img src={ConvoIcon} alt="conversations icon"></img>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/view">view</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
