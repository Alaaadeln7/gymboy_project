import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { appContext } from "../App";
import LogOut from "./logout/LogOut";
import "./profile.scss";
export default function Profile() {
  const { theme, user, setTheme } = useContext(appContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (theme === true) {
  //     document.body.classList.add("light");
  //   } else {
  //     document.body.classList.remove("light");
  //   }
  // }, []);
  return (
    <article
      className="profile"
      style={
        theme === false ? { background: "#32363c" } : { background: "#848484" }
      }
    >
      {user?.picture && <img src={user?.picture} alt="user" />}
      <h3>fristName : {user.fristName || user.given_name}</h3>
      <h3>lastName : {user.lastName || user.family_name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>password : {user.password || "saved"}</h3>
      <h3>
        theme :
        <button
          onClick={() => {
            setTheme(!theme);
          }}
          className="btn"
        >
          {theme ? "dark" : "light"}
        </button>
      </h3>
      <LogOut />
      <button
        className="btn"
        onClick={() => {
          navigate("/updateuser");
        }}
      >
        Update user
      </button>
    </article>
  );
}
