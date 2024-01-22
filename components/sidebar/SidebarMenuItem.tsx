"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
  target?: string;
}

export const SidebarMenuItem = ({
  path,
  icon,
  title,
  subTitle,
  target = "_self",
}: SidebarMenuItemProps) => {
  const isActive = path === usePathname();
  return (
    <Link
      href={path}
      target={target}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${
        isActive ? "bg-blue-800" : ""
      }`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50">{subTitle}</span>
      </div>
    </Link>
  );
};
