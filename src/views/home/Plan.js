import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../../App";
import { FaCheck, FaRegWindowClose } from "react-icons/fa";
import formateCaurrncy from "../../components/formatCurrency";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "./plan.scss";
export default function Plan(props) {
  const navigate = useNavigate();
  const { user, theme } = useContext(appContext);
  return (
    <article
      className="plan"
      style={
        theme === false ? { background: "#32363c" } : { background: "#848484" }
      }
    >
      <h2>{props.title}</h2>
      <del>{formateCaurrncy(props.oldPrice)} / month</del>
      <h1>
        {formateCaurrncy(props.price)}
        <span> / month</span>
      </h1>
      <button
        onClick={() => {
          user === ""
            ? Swal.fire({
                title: "Please sign Up frist",
                background: "#32363c",
                text: "if you want subscribe you should sign up",
                icon: "question",
                color: "#fff",
                iconColor: "#ffc832",
                confirmButtonText: "Ok",
                showCancelButton: "true",
                confirmButtonColor: "#ffc832",
              }).then((result) => {
                console.log(result);
                if (result.isConfirmed) {
                  navigate("/signup");
                }
              })
            : navigate("/");
        }}
      >
        {props.title}
      </button>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <span
              style={
                item.apper === true
                  ? { background: "#ffc832" }
                  : { background: "red" }
              }
            >
              {item.apper === true ? <FaCheck /> : <FaRegWindowClose />}
            </span>
            {item.content}
          </li>
        ))}
      </ul>
    </article>
  );
}
