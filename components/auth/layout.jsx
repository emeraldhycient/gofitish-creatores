import Head from "next/head";

function Layout(props) {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      <Head>
        <title>Gofitish creators- {props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-transparent h-fit">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-900 w-full h-fit p-4">
            <div className="flex justify-center items-center h-fit">
              <div>
                <h1 className="text-gray-50 font-bold text-xl text-center">
                  {props.head}
                </h1>
                {props.children}
              </div>
            </div>
          </div>
          <div
            className="h-screen bg-gray-50 hidden md:block w-full"
            style={{
              backgroundImage: "url(https://picsum.photos/200/300)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
