import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { EyeSlashFilledIcon } from "../utils/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../utils/EyeFilledIcon";
import { Button } from "@nextui-org/react";
import { auth } from "../config/AuthConfig";

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onClickLogin = () => {
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log("user" + user);
      })
      .catch((err) => {
        const errCode = err.code;
        const errorMessage = err.message;
        console.log(errCode, errorMessage);
      });
  };

  return (
    <>
      <div className="login-container">
        <Input
          className="max-w-xs"
          type="email"
          label="Email"
          onChange={(e) => setMail(e.target.value)}
        />
        <Input
          label="Password"
        //   variant="bordered"
        //   placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          onChange={(e)=>setPassword(e.target.value)}
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
        <Button color="secondary" onClick={onClickLogin}>Login</Button>
      </div>
    </>
  );
};

export default Login;
