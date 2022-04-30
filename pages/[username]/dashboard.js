import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/dashboard/layout";
import Stats from "../../components/dashboard/stats";
import { FcAreaChart } from "react-icons/fc";
import Trendingvideo from "../../components/videos/trendingvideo";
import Trendingpodcast from "../../components/podcasts/trendingpodcast";

function Dashboard(props) {
  const router = useRouter();
  const { username } = router.query;

  const [statis, setstatis] = useState([
    {
      title: "Videos",
      icon: "fa fa-video mr-1",
      link: "/emmanuel/videos/",
      total: 23,
    },
    {
      title: "PodCasts",
      icon: "fa fa-podcast mr-1",
      link: "/emmanuel/podcasts/",
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

  const [vid, setvid] = useState([
    {
      title: "First Video on Hammer      ",
      poster: "/images/img1.png",
      channel_id: "creatores crew",
      video_url: "/videos/Exercise.mp4",
      views: 23,
    },
    {
      title: "Random explainer on indoor",
      poster: "/images/img2.png",
      channel_id: "creatores crew",
      video_url: "/videos/Exercise2.mp4",
      views: 34,
    },
    {
      title: "waist trainer using dumbbell",
      poster: "/images/img3.jpeg",
      channel_id: "creatores crew",
      video: "/videos/Exercise.mp4",
      views: 45,
    },
    {
      title: "belle belt doesnt burn fat",
      poster: "/images/img4.png",
      channel_id: "creatores crew",
      video_url: "/videos/Exercise2.mp4",
      views: 25,
    },
    {
      title: "eating after 7 should be considered suicidal",
      poster: "/images/img5.jpeg",
      channel_id: "creatores crew",
      video: "/videos/Exercise.mp4",
      views: 35,
    },
    {
      title: "i dont know what else to use",
      poster: "/images/img6.png",
      channel_id: "creatores crew",
      video_url: "/videos/Exercise2.mp4",
      views: 24,
    },
  ]);

  const [pod, setpod] = useState([
    {
      title: "First Video on Hammer      ",
      poster: "/images/img1.png",
      channel_id: "creatores crew",
      audio_url: "/audio/audio1.mp3",
      listens: 23,
    },
    {
      title: "Random explainer on indoor",
      poster: "/images/img2.png",
      channel_id: "creatores crew",
      audio_url: "/audio/audio2.mp3",
      listens: 34,
    },
    {
      title: "waist trainer using dumbbell",
      poster: "/images/img3.jpeg",
      channel_id: "creatores crew",
      audio_url: "/audio/audio3.mp3",
      listens: 45,
    },
    {
      title: "belle belt doesnt burn fat",
      poster: "/images/img4.png",
      channel_id: "creatores crew",
      audio_url: "/audio/audio1.mp3",
      listens: 25,
    },
    {
      title: "eating after 7 should be considered suicidal",
      poster: "/images/img5.jpeg",
      channel_id: "creatores crew",
      audio_url: "/audio/audio2.mp3",
      listens: 35,
    },
    {
      title: "i dont know what else to use",
      poster: "/images/img6.png",
      channel_id: "creatores crew",
      audio_url: "/audio/audio3.mp3",
      listens: 24,
    },
  ]);

  return (
    <Layout title={`dashboard for ${username}`} head="Dashboard">
      <section className="mx-6 w-11/12 mx-auto">
        <section className=" my-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {statis.map((stat, index) => (
              <Stats data={stat} key={index} />
            ))}
          </div>
        </section>
        <section className=" my-8">
          <h1 className="text-base text-gray-50 font-bold my-2 flex">
            Trending <FcAreaChart size={22} />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4   ">
            <Trendingvideo trend={vid[3]} />
            <Trendingvideo trend={vid[5]} />
            <Trendingpodcast trend={pod[3]} />
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default Dashboard;
