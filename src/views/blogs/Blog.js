import { useNavigate } from "react-router-dom";
import MyImage from "../../components/LazyImage";
import "./blog.scss";
import { useContext } from "react";
import { appContext } from "../../App";
export default function Blog(props) {
  const navgite = useNavigate();
  const { theme } = useContext(appContext);
  return (
    <article className="blog">
      <div className="image">
        <MyImage src={props.image} alt={""} />
      </div>
      <div
        className="text"
        style={
          theme === false
            ? { background: "#32363c" }
            : { background: "#848484" }
        }
      >
        <span
          className="date"
          style={theme === false ? { color: "#ddd" } : { color: "#fff" }}
        >
          {props.date}
        </span>
        <h3 className="title">{props.title}</h3>
        <p
          className="description"
          style={theme === false ? { color: "#ddd" } : { color: "#fff" }}
        >
          {props.description}
        </p>
        <button
          className="btn"
          onClick={() => {
            navgite(`/blogs/${props.blogId}`);
          }}
        >
          show more
        </button>
      </div>
    </article>
  );
}
