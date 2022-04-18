import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/dashboard/layout";
import Stats from "../../components/dashboard/stats";
import { FcAreaChart } from "react-icons/fc";

function Dashboard(props) {
  const router = useRouter();
  const { username } = router.query;

  const [statis, setstatis] = useState([
    {
      title: "Videos",
      icon: "fa fa-video mr-1",
      link: "/emmanuel/dashboard/",
      total: 23,
    },
    {
      title: "PodCasts",
      icon: "fa fa-podcast mr-1",
      link: "/emmanuel/dashboard/",
      total: 34,
    },
    {
      title: "Marketplace",
      icon: "fa fa-store mr-1",
      link: "/emmanuel/dashboard/",
      total: 45,
    },
    {
      title: "Orders",
      icon: "fa fa-file-invoice mr-1",
      link: "/emmanuel/dashboard/",
      total: 25,
    },
    {
      title: "Blog",
      icon: "fa fa-blog mr-1",
      link: "/emmanuel/dashboard/",
      total: 35,
    },
    {
      title: "Payments",
      icon: "fa fa-credit-card mr-1",
      link: "/emmanuel/dashboard/",
      total: 24,
    },
  ]);

  return (
    <Layout title={`dashboard for ${username}`} head="Dashboard">
      <section className="mx-4 my-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {statis.map((stat, index) => (
            <Stats data={stat} key={index} />
          ))}
        </div>
      </section>
      <section className="mx-6 w-full">
        <h1 className="text-base text-gray-50 font-bold my-2 flex">
          Trending <FcAreaChart size={22} />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2   ">
          <div className="md:col-span-4 ">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-400 h-[100px] w-full"></div>
              <div className="bg-gray-400 h-[100px] w-full"></div>
            </div>
          </div>
          <div className="bg-green-200 w-full col-span-2"></div>
        </div>
      </section>
    </Layout>
  );
}

export default Dashboard;
