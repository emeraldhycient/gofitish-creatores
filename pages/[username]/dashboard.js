import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/dashboard/layout";

function Dashboard(props) {
  const router = useRouter();
  const { username } = router.query;
  return <Layout title={`dashboard for ${username}`} head="Dashboard"></Layout>;
}

export default Dashboard;
