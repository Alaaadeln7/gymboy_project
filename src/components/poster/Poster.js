import { useContext } from "react";
import MyImage from "../LazyImage";
import "./poster.scss";
import { appContext } from "../../App";
export default function Poster(props) {
  const { user, theme } = useContext(appContext);
  return (
    <section>
      <div className="container">
        <div className="text">
          {user !== undefined && (
            <span className="username">
              hello{" "}
              {`${user?.fristName || user.given_name} ${
                user?.lastName || user.family_name
              }`}
            </span>
          )}
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="contain-btns">
            <button className="btn">{props.fristBtn}</button>
            <button className="btn">{props.lastBtn}</button>
          </div>
        </div>
        <div className="image">
          <MyImage src={props.image} alt={props.title} />
        </div>
      </div>
    </section>
  );
}
