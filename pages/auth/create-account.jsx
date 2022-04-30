import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/auth/layout";
import axios from "axios";

function Signup() {
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [shopname, setshopname] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [ispassvalid, setispassvalid] = useState(true);

  useEffect(() => {
    if (password !== "" && cpassword !== "") {
      if (password.length !== cpassword.length && password !== cpassword) {
        setispassvalid(false);
        return;
      }
      setispassvalid(!ispassvalid);
    }
  }, [password, cpassword]);

  const createportalaccess = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("fullname", fullname);
    formdata.append("username", username);
    formdata.append("phone", phone);
    formdata.append("email", email);
    formdata.append("shop_name", shopname);
    formdata.append("country", "nigeria");
    formdata.append("address", "nigeria");
    formdata.append("password", password);
    formdata.append("confirmPassword", cpassword);

    axios
      .post(`${process.env.NEXT_PUBLIC_apiUrl}create-account`, formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <Layout
      title="Create a gofitish portal account  🚪"
      head="🚪 Begin Portal account creation"
    >
      <form
        onSubmit={(e) => createportalaccess(e)}
        className="pt-5 text-center md:w-9/12 items-center mx-auto shadow shadow-xl rounded-lg p-8 bg-white"
      >
        <input
          type="text"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
          placeholder="Full Name"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder=" UserName"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          placeholder="Phone"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <input
          type="text"
          value={shopname}
          onChange={(e) => setshopname(e.target.value)}
          placeholder="Shop name"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        Do passwords match ?{" "}
        {password !== "" && cpassword !== ""
          ? ispassvalid
            ? "yes"
            : "no"
          : ""}
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setcpassword(e.target.value)}
          placeholder="Confirm Password"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
          autoComplete=""
          required
        />
        <button
          type="submit"
          className="bg-slate-800 w-full h-10 mb-5 rounded text-purple-700	"
        >
          Signup
        </button>
        <p className="text-gray-400">
          <Link href="/auth/login" className="text-decoration-none mt-4">
            Login
          </Link>
        </p>
      </form>
    </Layout>
  );
}

export default Signup;
