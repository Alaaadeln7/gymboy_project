import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./class-item.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../App";
export default function ClassItem(props) {
  const { theme } = useContext(appContext);
  return (
    <article
      className="classes-item"
      style={
        theme === false ? { background: "#32363c" } : { background: "#848484" }
      }
    >
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <h1>{props.name}</h1>
      <div className="social-media">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>
      <Link className="btn link" to={`/classes/${props.id}`}>
        Show More
      </Link>
    </article>
  );
}
