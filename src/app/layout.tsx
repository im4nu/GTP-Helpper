import { TourStepProvider } from "@/contexts/TourStepContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Button } from "@/components/Button";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Helper | Simplificador de comandos do chat GPT-3",
  description:
    "Simplifique suas tarefas e alcance o sucesso de forma rápida e fácil com nosso Software de Comandos Inteligentes. Experimente agora mesmo e veja como tudo pode ser mais simples e eficiente!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`flex bg-dark bg-circles bg-no-repeat bg-cover items-center justify-center w-screen min-h-screen text-white ${inter.className}`}
      >
        <div className="hidden sm:flex">
          <TourStepProvider>{children}</TourStepProvider>
        </div>

        <div className="flex sm:hidden flex-col bg-white rounded-xl w-2/3 h-1/3 items-center justify-center text-center p-6 text-dark gap-6">
          <h1 className="text-xl">Oops...</h1>

          <Image
            src={"/avatars/confused.png"}
            alt="Oops..."
            height={80}
            width={80}
          />

          <p className="text-xs text-gray">
            Nosso site funciona apenas em{" "}
            <span className="font-semibold">dispositivos maiores</span> como
            tablets, notebooks, computadores etc.
          </p>
          <p className="text-xs text-gray">
            Experimente{" "}
            <span className="font-semibold">deitar o seu smartphone</span> e ver
            o conteúdo do site na horizontal ou opte por acessar através de
            outro aparelho <span className="font-semibold">(recomendado)</span>
          </p>
          <Button className="text-white">Ok</Button>
        </div>
      </body>
    </html>
  );
}
