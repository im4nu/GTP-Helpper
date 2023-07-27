import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface TabLayoutProps {
  children: ReactNode;
}

export default function TabLayout({ children }: TabLayoutProps) {
  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between">
      <Sidebar />

      {children}
    </main>
  );
}
