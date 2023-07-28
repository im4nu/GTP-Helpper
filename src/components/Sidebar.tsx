"use client";

import { Add, Box, Clock } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "./Link";

interface SidebarProps {
  title?: string;
}

const previousChat = [
  {
    id: 0,
    title: "Paleta de Cores",
  },
  {
    id: 1,
    title: "Nomenclatura de fun...",
  },
  {
    id: 2,
    title: "CRUD em node js",
  },
];

export default function Sidebar({ title }: SidebarProps) {
  const { push } = useRouter();
  return (
    <div className="flex flex-col min-h-screen w-[260px] bg-[#0E131F] items-start pl-[20px] py-8 text-white gap-8 justify-evenly">
      <h5 className="text-3xl">Início</h5>

      <div className="flex flex-col gap-4">
        <p className="text-sm">Iniciar novo chat</p>
        <Link href={"/client/new-chat"}>
          <Add size="25" />
          Novo chat
        </Link>

        <p className="text-sm">Histórico de chat</p>
        <Link href={"/client/historic"}>
          <Clock size="25" />
          Histórico
        </Link>

        <p className="text-sm">Planos de assinatura</p>
        <Link href={"/client/plans"}>
          <Box size="25" />
          Planos
        </Link>
      </div>

      <div className="flex flex-col items-start gap-4">
        <p className="text-sm">Chats anteriores</p>

        {previousChat.map((item) => (
          <Link
            key={item.id}
            href={`/client/chat`}
            variant={"none"}
            className="flex flex-row items-center justify-center gap-4 -ml-5"
          >
            <div className="flex w-[5px] rounded-sm h-[35px] bg-main stroke-shadow" />

            <button className="flex text-xs p-4 w-[225px] bg-[#262A35] rounded-xl ease-in-out duration-300 hover:opacity-80">
              {item.title}
            </button>
          </Link>
        ))}

        <button className="underline text-center w-full text-xs text-[#ffffffd3] ease-in-out duration-300 hover:text-white">
          Ver mais...
        </button>
      </div>

      <div className="hidden flex-col items-center gap-2 w-full pr-[20px] 2xl:flex">
        <Image src={"/img/logo.png"} alt="Logo" width={50} height={50} />
        <p>GPT Helpper</p>
      </div>
    </div>
  );
}
