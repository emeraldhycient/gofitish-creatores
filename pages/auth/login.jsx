import Layout from "../../components/auth/layout";
function Login() {
  return (
    <Layout title="Login Page 🚪" head="🚪 Portal to Dashboard">
      <form action="" className="pt-5 text-center">
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
        <button
          type="submit"
          className="bg-slate-800 w-10/12 h-10 mb-3 rounded text-purple-700	"
        >
          Login
        </button>
        <p>
          <a href="/signup" className="text-decoration-none mt-4">
            Signup
          </a>
        </p>
      </form>
    </Layout>
  );
}

export default Login;
