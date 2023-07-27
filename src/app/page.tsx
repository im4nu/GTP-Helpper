import Header from "@/components/Header";
import { JobCards } from "@/components/JobCards";
import TabLayout from "@/layouts/Tab";
import { Book, Colorfilter, Instagram, PenTool } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <TabLayout>
      <div className="flex flex-col w-[calc(100vw-260px)] h-full items-center justify-evenly lg:px-[2.5vw] xl:px-[5vw] 2xl:px-[10vw]">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/img/logo.png"}
            alt="Logomarca"
            width={92}
            height={178}
          />

          <h1>Seja bem vindo(a) ao GPT Helpper!</h1>

          <h2 className="text-xs text-white-200">
            Basta digitar o que precisa e pronto! Nossos comandos inteligentes
            cuidarão do resto.{" "}
          </h2>

          <h2 className="text-xs text-white-200 w-2/3 text-center">
            Simplifique suas tarefas e alcance o sucesso de forma rápida e fácil
            com nosso Software de Comandos Inteligentes. Experimente agora mesmo
            e veja como tudo pode ser mais simples e eficiente!
          </h2>
        </div>

        <div className="flex flex-row items-center justify-evenly w-full">
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
        </div>

        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex flex-row gap-2">
            <p>Experimente alguns perfis: </p>
            <Colorfilter size="18" color="#FF8A65" />
            <Book size="18" color="#FF8A65" />
            <PenTool size="18" color="#FF8A65" />
            <Instagram size="18" color="#FF8A65" />
          </div>

          <input
            type="text"
            placeholder="“ Como utilizar o GPT Helpper? =) ”"
            className="flex w-full bg-white rounded-lg p-3 text-dark"
          />
        </div>
      </div>
    </TabLayout>
  );
}
