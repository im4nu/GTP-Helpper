import { ProfessionCard } from "@/components/ProfessionCard";
import TabLayout from "@/layouts/Tab";
import { Add, Send2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { CardsData } from "../../utils/cards";
import TourTip from "@/components/tour/Tip";
import InputChat from "@/components/chat/Input";

export default function Home() {
  return (
    <TabLayout>
      <div className="flex flex-col w-full h-full items-center justify-evenly">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src={"/img/logo.png"}
            alt="Logomarca"
            width={92}
            height={178}
          />

          <h1 className="text-xl">Seja bem vindo(a) ao GPT Helpper!</h1>

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
          {CardsData.map((item) => (
            <>
              {item.id <= 2 && (
                <ProfessionCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  link="/client/new-chat/profession-options"
                />
              )}
            </>
          ))}
        </div>

        <Link
          href={"/client/new-chat"}
          className="text-xs underline text-white-200 hover:text-white ease-in-out duration-300"
        >
          Ver mais
        </Link>

        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex flex-row items-start w-full gap-2">
            <p>Experimente alguns perfis: </p>

            {CardsData.map((item) => (
              <Link
                key={item.id}
                href={"/client/new-chat/profession-options"}
                className="scale-90 gap-3"
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <InputChat />
        </div>
      </div>

      <TourTip />
    </TabLayout>
  );
}
