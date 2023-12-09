import { useContext } from "react";
import MyImage from "../../components/LazyImage";
import "./trainner.scss";
import { appContext } from "../../App";

export default function Trainner(props) {
  const { theme } = useContext(appContext);
  return (
    <article
      className="trainner"
      style={
        theme === false ? { background: "#32363c" } : { background: "#848484" }
      }
    >
      <div className="main-image">
        <img src={props.image} alt="" />
      </div>
      <div className="user">
        <MyImage src={props.image} alt={props.userName} />
        <div className="info">
          <h3>{props.userName}</h3>
          <p>{props.email}</p>
        </div>
      </div>
    </article>
  );
}
