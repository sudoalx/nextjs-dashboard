import Image from "next/image";
import Link from "next/link";

import {
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoHeart,
  IoLogoGithub,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "..";
import { CgPokemon } from "react-icons/cg";

interface MenuItemsProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
  target?: string;
}

const menuItems: MenuItemsProps[] = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline className="w-6 h-6 text-white" />,
    title: "Dashboard",
    subTitle: "Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline className="w-6 h-6 text-white" />,
    title: "Counter",
    subTitle: "Client-side counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <CgPokemon className="w-6 h-6 text-white" />,
    title: "Pokemons",
    subTitle: "Static generation: List of pokemons",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart className="w-6 h-6 text-white" />,
    title: "Favorite Pokemons",
    subTitle: "Global State: List of favorite pokemons",
  },
  {
    path: "https://github.com/sudoalx/nextjs-dashboard",
    icon: <IoLogoGithub className="w-6 h-6 text-white" />,
    title: "Source Code",
    subTitle: "Source code of this dashboard on GitHub",
    target: "_blank",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll"
    >
      <div className="flex flex-col h-full  max-w-80">
        <div id="logo" className="my-5 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            <span className="text-blue-500">
              <IoLogoReact className="inline-block mr-1" />
              Next
            </span>{" "}
            Dash
          </h1>
          <p className="text-slate-500 text-sm">
            A Next.js dashboard powered by Tailwind CSS and TypeScript
          </p>
        </div>
        <div id="profile" className="px-6 py-5 flex flex-col">
          <p className="text-slate-500 text-2xl font-bold">Welcome</p>
          <Link href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="/iron-man.jpeg"
                alt="profile picture"
                width={32}
                height={32}
              />
            </span>
            <span className="text-sm md:text-base font-bold">Alex</span>
          </Link>
        </div>

        <div id="nav" className="w-full px-6">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={`${item.title}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
