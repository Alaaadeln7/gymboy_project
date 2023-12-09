import { useNavigate } from "react-router-dom";
import "./offer.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { appContext } from "../../App";
import { useContext } from "react";
export default function Offer(props) {
  const appContextProvider = useContext(appContext);
  const navigate = useNavigate();
  return (
    <article className="offer" style={{ background: props.bg }}>
      <div className="text">
        <h1 style={{ color: props.textColor }}> {props.title}</h1>
        <p style={{ color: props.textColor }}>{props.description}</p>
        <button
          className="btn"
          style={{ color: props.textColorBtn, background: props.bgBtn }}
          onClick={() => {
            appContextProvider.user === ""
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
                  if (result.isConfirmed) {
                    navigate("/signup");
                  }
                })
              : navigate("/checkout");
          }}
        >
          {props.btnText}
        </button>
      </div>
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
    </article>
  );
}
