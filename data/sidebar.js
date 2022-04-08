import { atom } from "jotai";
const sidebardata = atom([
  {
    name: "Dashboard",
    icon: "fa fa-home mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: true,
  },
  {
    name: "Videos",
    icon: "fa fa-video mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
  {
    name: "PodCasts",
    icon: "fa fa-podcast mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
  {
    name: "Marketplace",
    icon: "fa fa-store mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
  {
    name: "Orders",
    icon: "fa fa-file-invoice mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
  {
    name: "Blog",
    icon: "fa fa-blog mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
  {
    name: "Payments",
    icon: "fa fa-credit-card mr-1 fa-lg",
    link: "/emmanuel/dashboard/",
    isActive: false,
  },
]);

export default sidebardata;
