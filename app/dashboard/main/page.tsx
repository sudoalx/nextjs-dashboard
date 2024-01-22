import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Information
      </h2>
      <WidgetsGrid />
    </div>
  );
}
