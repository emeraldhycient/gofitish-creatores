import Link from "next/link";
function Stats({ data }) {
  const { title, icon, link, total } = data;

  return (
    <div className="bg-slate-700 h-fit pb-2 rounded-lg ">
      <div className="flex justify-between items-center pr-2">
        <div className="flex items-center bg-slate-500 rounded-lg p-1">
          <i className={`${icon} text-purple-200`}></i>
        </div>
        <Link href={link}>
          <i className={`fa fa-link text-purple-200`}></i>
        </Link>
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-gray-100 font-semibold text-2xl">
          {total}
        </h1>
        <div className="text-center text-white text-sm">{title}</div>
      </div>
    </div>
  );
}

export default Stats;
