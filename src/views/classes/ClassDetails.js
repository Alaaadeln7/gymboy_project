/* eslint-disable no-unused-expressions */
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import "./classe-details.scss";
import { ToastContainer, toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import formatCurrency from "../../components/formatCurrency";
import Loading, {
  LoadingH1,
  LoadingImage,
  LoadingText,
} from "../../components/Loading";
import "react-toastify/dist/ReactToastify.css";
import { appContext } from "../../App";
export default function ClassDetails() {
  const { user, theme } = useContext(appContext);
  const { classId } = useParams();
  const [classData, setClassData] = useState();
  const [loading, setLoading] = useState(false);
  let mounted = true;
  const notify = () =>
    toast.success("subscribed", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme === false ? "dark" : "light",
    });
  useEffect(() => {
    const url = "https://gymboy.onrender.com/api/classes";
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${url}/${classId}`);
      if (mounted) {
        const result = await response.clone().json();
        setClassData(result?.data?.classe);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <section className="classData-details" key={classData?._id}>
      <div className="container">
        <article className="image">
          {loading ? <LoadingImage /> : <img src={classData?.image} alt={""} />}
        </article>
        <article className="text">
          <button
            className="back btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <FaArrowLeft />
          </button>
          {loading ? <LoadingH1 count={1} /> : <h1>{classData?.name}</h1>}
          <p>{loading ? <LoadingText count={5} /> : classData?.discription}</p>
          <ul>
            {classData?.features?.map((item) => (
              <li key={item.id}>{loading ? <LoadingText /> : item.content}</li>
            ))}
          </ul>
          <span className="real-price">
            price : {loading ? <LoadingH1 /> : formatCurrency(classData?.price)}
          </span>
          <button
            className="btn subscribe"
            onClick={() => {
              user === "" ||
                (user === undefined
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
                  : notify());
            }}
          >
            Subscribe
          </button>
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
