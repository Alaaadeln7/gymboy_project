import "./product.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formatCurrency from "../../components/formatCurrency";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../App";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default function Product(props) {
  const { handleAddProduct, user, theme } = useContext(appContext);
  const navigate = useNavigate();
  const notify = () =>
    toast.success("Added product in cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <article
      className="product"
      key={props.productId}
      style={
        theme === false ? { background: "#32363c" } : { background: "#ddd" }
      }
    >
      <h1>{props.title.slice(0, 15) + ".."}</h1>
      {/* <p>{props.description}</p> */}
      <div className="contain-price">
        <del className="old-price">{formatCurrency(props.oldPrice)}</del>
        <span>{formatCurrency(props.price)}</span>
      </div>
      <img src={props.image} alt="" />
      <button
        className="btn"
        onClick={() => {
          if (user === "") {
            Swal.fire({
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
            });
          } else {
            handleAddProduct(props);
            notify();
          }
        }}
      >
        add to cart
        <span>
          <FaShoppingBasket />
        </span>
      </button>
      <button
        className="btn btn-details"
        onClick={() => {
          navigate(`/shop/${props.productId}`);
        }}
      >
        Details
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </article>
  );
}
