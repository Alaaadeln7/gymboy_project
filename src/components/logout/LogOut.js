import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default function LogOut() {
  const userId = window.sessionStorage.getItem("id");
  const [userData, SetUserData] = useState({});
  const url = `https://gymboy.onrender.com/api/users/${userId}`;
  // get password content
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetUserData(data?.data?.user));
  }, []);
  // console.log(userData);
  const deleteUser = () => {
    console.log(userId);
    axios
      .delete(url)
      .then((response) => {
        if (response.data.status === "success") {
          window.location = "/";
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="logout">
      <button
        className="btn"
        onClick={() => {
          Swal.fire({
            title: "Are you sure to Logout ?",
            background: "#32363c",
            text: "if you logout you will be not support any services in app",
            icon: "question",
            color: "#fff",
            iconColor: "#ffc832",
            confirmButtonText: "Ok",
            showCancelButton: "true",
            confirmButtonColor: "#ffc832",
          }).then((result) => {
            if (result.isConfirmed) {
              const validPassword = async () => {
                const { value: password } = await Swal.fire({
                  title: "Enter your password",
                  input: "password",
                  inputLabel: "Password",
                  inputPlaceholder: "Please enter your password",
                  color: "#fff",
                  background: "#32363c",
                  confirmButtonText: "Ok",
                  showCancelButton: "true",
                  confirmButtonColor: "#ffc832",
                  inputAttributes: {
                    maxlength: "10",
                    autocapitalize: "off",
                    autocorrect: "off",
                  },
                });
                if (password === userData?.password) {
                  Swal.fire({
                    title: "delete user",
                    confirmButtonColor: "#ffc832",
                    background: "#32363c",
                    color: "#fff",
                  }).then((result) => {
                    if (result.isConfirmed === true) {
                      deleteUser();
                    }
                  });
                } else {
                  Swal.fire({
                    title: "password wrong",
                    confirmButtonColor: "#ffc832",
                    background: "#32363c",
                    icon: "error",
                    color: "#fff",
                  });
                }
              };
              validPassword();
            }
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}
