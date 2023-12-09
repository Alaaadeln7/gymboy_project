import { useContext, useState } from "react";
import { appContext } from "../../App";
import "./login.scss";
import Logo from "../header/Logo";
import axios from "axios";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  const appContextProvider = useContext(appContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getData = async () => {
    const url = "https://gymboy.onrender.com/api/users/login";
    await axios
      .post(url, {
        email,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          window.localStorage.setItem("id", res.data.data.user._id);
          window.location = "/";
        }
      })
      .catch((error) => {
        console.log(error.data.data.message);
      });
  };
  return (
    <section className="login">
      <div className="container">
        <div className="form-header">
          <h1>
            you will enjoy with
            <span>
              <Logo />
            </span>
          </h1>
        </div>
        <form
          action="POST"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            placeholder="password"
          />
          <button
            className="btn"
            type="submit"
            onClick={() => {
              getData();
            }}
          >
            Login
          </button>
          <Link to={"/signup"}>Create account</Link>
        </form>
      </div>
      <sweetAlert />
    </section>
  );
}
