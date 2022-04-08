import Link from "next/link";

import Layout from "../../components/auth/layout";

function Login() {
  return (
    <Layout title="Login Page 🚪" head="🚪 Portal to Dashboard">
      <form
        action=""
        className="pt-5 text-center shadow shadow-xl rounded-lg p-8 bg-white"
      >
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
          className="border-b-[.145rem] w-full  h-10 mb-5 rounded focus:outline-none pl-2"
        />
        <button
          type="submit"
          className="bg-slate-800 w-full h-10 mb-5 rounded text-purple-700	"
        >
          Login
        </button>
      </form>
      <p className="text-gray-200">
        <Link href="/auth/create-account" className="text-decoration-none mt-4">
          Signup
        </Link>
      </p>
    </Layout>
  );
}

export default Login;
