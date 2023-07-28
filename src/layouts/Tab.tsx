import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ModalToor } from "@/components/toor/Modal";
import { ReactNode } from "react";

interface TabLayoutProps {
  children: ReactNode;
}

export default function TabLayout({ children }: TabLayoutProps) {
  return (
    <main className="flex min-h-screen min-w-screen flex-row justify-between relative">
      <Sidebar />

      <div className="flex flex-col w-[calc(100vw-260px)] h-screen lg:px-[2.5vw] xl:px-[5vw] 2xl:px-[10vw]">
        <Header />
        {children}
      </div>

      <ModalToor />
    </main>
  );
}
