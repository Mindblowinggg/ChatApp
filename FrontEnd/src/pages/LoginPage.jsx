import React, { useState } from "react";
import { LuMessageSquareMore } from "react-icons/lu";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currentstate, setcurrentstate] = useState("Sign up");

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [bio, setbio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currentstate === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  };
  return (
    <div className="min-h-screen text-black bg-cover flex items-center justify-between gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/*-------------left------------ */}
      <div className="flex flex-col items-center justify-center w-[min(30vw,250px)]">
        <LuMessageSquareMore size={100} className="text-blue-500" />
        <h1 className="text-4xl">ChatApp</h1>
      </div>

      {/*---------------right-------------- */}

      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-black border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentstate}
          {isDataSubmitted && (
            <img
              onClick={() => {
                setIsDataSubmitted(false);
              }}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>
        {currentstate === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setfullname(e.target.value)}
            value={fullname}
            type="text"
            className="p-2 focus:ring-2 focus:ring-blue-500  rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}
        {currentstate === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setbio(e.target.value)}
            value={bio}
            rows={4}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="provide a short bio...."
            required
          ></textarea>
        )}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-black rounded-md cursor-pointer"
        >
          {currentstate === "Sign up" ? "Create Account" : "Login Now"}
        </button>
        <div className="flex items-center select-none gap-2 text-sm text-gray-500">
          <input className="cursor-pointer" id="check" type="checkbox" />
          <label className="cursor-pointer" htmlFor="check">
            {" "}
            Agree to the terms of use & privacy policy
          </label>
        </div>

        <div className="flex flex-col items-center gap-2">
          {currentstate === "Sign up" ? (
            <p className="text-sm text-gray-600">
              already have an account?{" "}
              <span
                onClick={() => {
                  setcurrentstate("Login");
                  setIsDataSubmitted(false);
                }}
                className="cursor-pointer font-medium text-blue-600"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account{" "}
              <span
                onClick={() => {
                  setcurrentstate("Sign up");
                }}
                className="cursor-pointer font-medium text-blue-600"
              >
                Click here{" "}
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
