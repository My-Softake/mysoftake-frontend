import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <DashboardHeader />
      <Sidebar />

      <div className="flex">
        <div className="w-64 flex-shrink-0" />

        <main className="flex-1 min-h-screen pt-[115px] pb-4 bg-[#F9FAFB]">
          {children}
        </main>
      </div>
    </div>
  );
}
