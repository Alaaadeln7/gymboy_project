import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import HashLoader from "react-spinners/HashLoader";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Shop from "./views/shop/Shop";
import Classes from "./views/classes/Classes";
import Blogs from "./views/blogs/Blogs";
import Contact from "./views/blogs/Blogs";
import Login from "./components/login/Login";
import Sign from "./components/sign/Sign";
import Footer from "./components/footer/Footer";
import ClassDetails from "./views/classes/ClassDetails";
import ProductDetails from "./views/shop/ProductDetails";
import Shopping from "./components/shopping/Shopping";
import BlogDetails from "./views/blogs/BlogDetails";
import NotFound from "./components/NotFound";
import UpdateUser from "./components/UpdateUser";
export const appContext = createContext();
export default function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  // get user data
  useEffect(() => {
    const getData = async () => {
      const userId = window.sessionStorage.getItem("id");
      const url = `https://gymboy.onrender.com/api/users/${userId}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setUser(data?.data?.user));
    };
    getData();
  }, []);
  function handleAddProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  function removeProduct(product) {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  }
  function handelClearShopping() {
    setCartItems([]);
  }
  // to show sign up message to user
  window.onscroll = () => {
    if (window.scrollY === 500) {
      if (user === undefined) {
        Swal.fire({
          title: " Sign up to can interactive with website",
          background: "#32363c",
          text: "click ok",
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
      }
    }
  };
  return (
    <appContext.Provider
      value={{
        user,
        handelClearShopping,
        removeProduct,
        handleAddProduct,
        cartItems,
        setUser,
        theme,
        setTheme,
      }}
    >
      {loading ? (
        <div
          className="loader"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader
            className="loader"
            color={"#ffc832"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <main
          className="app"
          style={
            theme === false ? { background: "#15141b" } : { background: "#fff" }
          }
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="blogs/:blogId" element={<BlogDetails />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="classes/:classId" element={<ClassDetails />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="shop/:productId" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/updateuser" element={<UpdateUser />} />
          </Routes>
          <Footer />
        </main>
      )}
    </appContext.Provider>
  );
}
