import { Sidebar } from "@/components";
import "animate.css";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-800 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="min-h-screen w-full text-white bg-gray-900 bg-clip-border shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
