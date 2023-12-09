import { Link } from "react-router-dom";
import "./logo.scss";
export default function Logo() {
  return (
    <div className="logo">
      <h1>
        <Link to={"/"}> GYMBOY. </Link>
      </h1>
    </div>
  );
}
