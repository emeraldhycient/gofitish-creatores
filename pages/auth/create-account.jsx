import Link from "next/link";

import Layout from "../../components/auth/layout";

function Signup() {
  return (
    <Layout
      title="Create a gofitish portal account  🚪"
      head="🚪 Begin Portal account creation"
    >
      <form
        action=""
        className="pt-5 text-center w-9/12 items-center mx-auto shadow shadow-xl rounded-lg p-8 bg-white"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
        />
        <input
          type="tel"
          name=""
          id=""
          placeholder="Phone"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
          className="border-b-[.145rem] w-full h-10 mb-5 rounded focus:outline-none pl-2"
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
