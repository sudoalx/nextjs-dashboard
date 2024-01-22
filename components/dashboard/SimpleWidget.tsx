import Link from "next/link";

interface Props {
  title: number;
  subTitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = ({
  title,
  subTitle,
  label,
  icon,
  href = "#",
}: Props) => {
  return (
    <div className="bg-gray-700 shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-900 m-2 hover:bg-gray-600 transition duration-300 ease-in-out cursor-pointer animate__animated animate__fadeInLeft">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-200 text-center">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">{icon}</div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl text-gray-200">{title}</h4>
              <p className="text-xs text-gray-400">{subTitle}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full place-items-end text-right border-t-2 border-gray-400 mt-2 items-center justify-center pt-2">
          <Link
            href={href}
            className="text-gray-200 text-xs font-medium hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Add more
          </Link>
        </div>
      </div>
    </div>
  );
};
