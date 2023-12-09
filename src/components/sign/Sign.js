/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import { appContext } from "../../App";
import { jwtDecode } from "jwt-decode";
import "./sign.scss";
import Logo from "../header/Logo";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sign() {
  const { user } = useContext(appContext);
  const [googleData, setGoogleData] = useState();
  const [message, setMessage] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // console.log(role);

  const validation = () => {
    const fristName_input = document.querySelector("#fristName");
    const lastName_input = document.querySelector("#lastName");
    const message_input = document.querySelector(".message");

    if (fristName_input.value == "") {
      // console.log("this is input is empty");
      message_input.style.visibility = "visible";
      message_input.style.setProperty("animation", "show-and-hidden 1s linear");
      setMessage("Please enter frist name");
    } else {
      message_input.style.visibility = "hidden";
      message_input.style.removeProperty("animation");
    }
    if (lastName_input.value == "") {
      message_input.style.visibility = "visible";
      message_input.style.setProperty("animation", "show-and-hidden 1s linear");
      setMessage("Please enter last name");
    } else {
      message_input.style.visibility = "hidden";
      message_input.style.removeProperty("animation");
    }
  };
  const url = "https://gymboy.onrender.com/api/users/register";
  const postData = async () => {
    await axios
      .post(url, {
        fristName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response?.status === 201) {
          window.sessionStorage.setItem(
            "id",
            `${response?.data?.data?.user?._id}`
          );
          window.location = "/";
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
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
          <span className="message">{message}</span>
          {error && <span style={{ color: "red" }}>{"*" + error}</span>}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onChange={(e) => {
              setFristName(e.target.value);
            }}
            type="text"
            name="fristName"
            id="fristName"
            placeholder="frist name"
          />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="last name"
          />
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
              validation();
              postData();
            }}
          >
            Sign up
          </button>
          <div className="contain-btns">
            <div id="signGoogle"></div>
          </div>
          <Link to={"/login"}>I have account , login</Link>
        </form>
      </div>
    </section>
  );
}
