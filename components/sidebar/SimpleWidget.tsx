import Link from "next/link";
import { IoCafeOutline } from "react-icons/io5";

export const SimpleWidget = () => {
  return (
    <div className="bg-gray-700 shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-900 m-2">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-gray-200 text-center">Counter</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              <IoCafeOutline size={50} className="text-gray-200" />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl text-gray-200">Title</h4>
              <p className="text-xs text-gray-400">Subtitle</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-700 mt-2">
          <Link href="#" className="text-indigo-400 text-xs font-medium">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
