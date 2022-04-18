import { useAtom } from "jotai";
import Link from "next/link";

import sidebardata from "../../data/sidebar";

function Sidebar() {
  const [data, setdata] = useAtom(sidebardata);
  const isactive = (index) => {
    setdata(
      data.map((item, i) => {
        if (index === i) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
    );
  };
  return (
    <div>
      <ul className="mt-12">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className={`my-2 px-3 py-2 text-left ${
                item.isActive && "bg-gray-500 rounded-md"
              } hover:bg-gray-500 hover:text-white hover:rounded-md`}
              onClick={() => isactive(index)}
            >
              <Link
                href={item.link}
                className="block px-4 py-2 text-white hover:bg-gray-500 hover:text-white hover:rounded-md"
              >
                <>
                  <i
                    className={`${item.icon} ${
                      item.isActive ? "text-white" : "text-purple-800 "
                    }`}
                  ></i>
                  <span
                    className={`ml-2 ${
                      item.isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
