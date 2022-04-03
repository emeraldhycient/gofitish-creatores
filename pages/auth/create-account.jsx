import Layout from "../../components/auth/layout";

function Signup() {
  return (
    <Layout title="Register on users-reduxToolkit 🚪">
      <form action="" className="pt-5 text-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
        />
        <input
          type="tel"
          name=""
          id=""
          placeholder="Phone"
          className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
          className="border-b-[.145rem] w-10/12 h-10 mb-3 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="bg-slate-800 w-10/12 h-10 mb-3 rounded text-purple-700	"
        >
          Signup
        </button>
        <p>
          <a href="/login" className="text-decoration-none mt-4">
            Login
          </a>
        </p>
      </form>
    </Layout>
  );
}

export default Signup;
