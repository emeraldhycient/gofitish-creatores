import { atom } from "jotai";
const sidebardata = atom([
  {
    name: "Stats",
    icon: "fa fa-database mr-1 fa-lg",
    link: "/dashboard/",
    isActive: true,
  },
  {
    name: "Videos",
    icon: "fa fa-video mr-1 fa-lg",
    link: "/videos/",
    isActive: false,
  },
  {
    name: "PodCasts",
    icon: "fa fa-podcast mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
  {
    name: "Marketplace",
    icon: "fa fa-store mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
  {
    name: "Orders",
    icon: "fa fa-file-invoice mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
  {
    name: "Blog",
    icon: "fa fa-blog mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
  {
    name: "Payments",
    icon: "fa fa-credit-card mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
  {
    name: "Settings",
    icon: "fa fa-settings mr-1 fa-lg",
    link: "/dashboard/",
    isActive: false,
  },
]);

export default sidebardata;
