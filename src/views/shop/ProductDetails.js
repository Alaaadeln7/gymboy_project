import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./product-details.scss";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import formatCurrency from "../../components/formatCurrency";
import Loading, {
  LoadingH1,
  LoadingText,
  LoadingImage,
} from "../../components/Loading";
import "react-toastify/dist/ReactToastify.css";
import { appContext } from "../../App";
export default function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme, handleAddProduct } = useContext(appContext);
  let mounted = true;
  useEffect(() => {
    const url = "https://gymboy.onrender.com/api/products";
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${url}/${productId}`);
      if (mounted) {
        const result = await response.clone().json();
        setProduct(result?.data?.product);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  const notify = () =>
    toast.success("Add product in shopping cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const navigate = useNavigate();
  return (
    <section className="product-details">
      <div className="container">
        <article className="image">
          {loading ? (
            <LoadingImage />
          ) : (
            <img src={product.image} alt={product.title} />
          )}
        </article>
        <article className="text">
          <button
            className="back btn"
            onClick={() => {
              navigate(-1);
              notify();
            }}
          >
            <FaArrowLeft />
          </button>
          {loading ? (
            <LoadingH1 />
          ) : (
            <h1
              style={theme === false ? { color: "#fff" } : { color: "#515151" }}
            >
              {product.title}
            </h1>
          )}
          <p>{loading ? <LoadingText /> : product.description}</p>
          <div className="prices-container">
            <del>{formatCurrency(product.oldPrice)}</del>
            <span className="real-price">
              {loading ? (
                <LoadingH1 />
              ) : (
                "price : " + formatCurrency(product.price)
              )}
            </span>
          </div>
          {loading ? (
            <LoadingH1 />
          ) : (
            <button
              className="btn"
              onClick={() => {
                handleAddProduct(product);
                notify();
              }}
            >
              Buy
            </button>
          )}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </article>
      </div>
    </section>
  );
}
