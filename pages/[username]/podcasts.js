import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "../../components/dashboard/layout";
import { FcAreaChart } from "react-icons/fc";
import Video from "../../components/videos/video";
import Link from "next/link";
import Podcast from "../../components/podcasts/podcast";
import Trendingpodcast from "../../components/podcasts/trendingpodcast";

function Podcasts(props) {
  const router = useRouter();
  const { username } = router.query;

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
    <Layout title={`podcasts for ${username}`} head="Podcasts">
      <section className="p-3">
        <button
          className="bg-blue-400 rounded text-white hover:bg-blue-300 float-right px-3 text-lg hover:mouse-pointer"
          type="button"
          data-modal-toggle="uploadvideo"
        >
          Upload
          <i className="fa fa-podcast ml-1"></i>
        </button>

        <div
          id="uploadvideo"
          tabIndex={-1}
          className="fixed top-0 left-0 right-0 z-50 hidden overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full h-full max-w-md p-4 md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="p-6 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I sure
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-6 w-10/12 mx-auto">
        <h1 className="text-base text-gray-50 font-bold my-2 flex">
          Trending <FcAreaChart size={22} />
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <Trendingpodcast trend={pod[5]} />
          <Trendingpodcast trend={pod[3]} />
        </div>
        <h1 className="text-base text-gray-50 font-bold my-2 flex">
          Podcasts <FcAreaChart size={22} />
        </h1>
        <table className="table-auto w-full rounded-2xl">
          <thead>
            <tr className=" rounded-full">
              <th className="text-white text-left p-5">#</th>
              <th className="text-white py-4 text-left">Audio</th>
              <th className="text-white text-left">Title</th>
              <th className="text-white text-left">Author</th>
              <th className="text-white text-left">Time</th>
              <th className="text-white text-left">Listens</th>
            </tr>
          </thead>
          <tbody>
            {pod.map((podcast, index) => (
              <Podcast podcast={podcast} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default Podcasts;
