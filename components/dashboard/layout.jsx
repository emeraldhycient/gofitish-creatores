import Head from "next/head";
import Script from "next/script";
import styles from "../../styles/Dashboard.module.css";
import Sidebar from "./sidebar";
function Layout(props) {
  return (
    <>
      <Head>
        <title>Gofitish creators- {props.title}</title>
        <meta name="description" content="dashboard to manage all" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/3c7014c175.js"
        crossorigin="anonymous"
      />
      <div className={styles.container}>
        <div className={`${styles.main_content}  bg-black `}>
          <div>
            <div className="h-12 bg-gray-700 w-full items-center flex">
              <div className="bg-black flex justify-between items-center h-8 w-56 rounded-full pl-2">
                <div className="flex items-center">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="profile"
                    className="rounded-full w-6 h-6"
                  />
                  <div className="ml-3">
                    <span className="text-white font-semibold mr-2">
                      Gofitish creators
                    </span>
                    <span className="text-gray-400">
                      <i className="fas fa-circle text-green-500"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {props.children}
          </div>
        </div>
        <div className={`${styles.sidebar}  bg-gray-900  shadow  shadow-xl `}>
          <h1 className="text-green-500 font-bold font-curly text-4xl text-center">
            {props.head}
          </h1>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Layout;
