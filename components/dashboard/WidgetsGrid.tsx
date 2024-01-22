"use client";

import { SimpleWidget } from "./SimpleWidget";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-4 gap-1 justify-center">
      <SimpleWidget
        title={count}
        subTitle="Items"
        label="Shopping cart"
        href="/dashboard/counter"
        icon={<IoCartOutline className="text-7xl" />}
      />
    </div>
  );
};
