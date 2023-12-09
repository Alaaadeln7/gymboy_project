import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import Logo from "./Logo";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useContext } from "react";
import { appContext } from "../../App";
import Profile from "../Profile";
export default function Header() {
  const navigate = useNavigate();
  const { cartItems, user } = useContext(appContext);
  // start nav bar responsive design
  // end nav bar responsive design
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/classes"}>Classes</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>
      </nav>
      <div className="contain-btns">
        {user === "" ||
          (user === undefined && (
            <Link className="btn" to={"/login"}>
              Login
            </Link>
          ))}
        {user === "" ||
          (user === undefined && (
            <Link className="btn" to={"/signup"}>
              Sign Up
            </Link>
          ))}

        {user !== undefined && (
          <>
            <button
              className="btn"
              onClick={() => {
                document.querySelector(".profile").classList.toggle("show");
              }}
            >
              profile
            </button>
            <Profile />
          </>
        )}
        <div
          className="bar"
          onClick={() => {
            document.querySelector("nav").classList.toggle("show");
          }}
        >
          <FaBars />
        </div>
      </div>
      <button
        className="btn"
        onClick={() => navigate("/shopping")}
        style={{
          display: "flex",
        }}
      >
        <FaShoppingCart />
        {cartItems.length === 0 ? null : <span>{cartItems.length}</span>}
      </button>
    </header>
  );
}
