import { Book } from "iconsax-react";
import Link from "next/link";

export function JobCards() {
  return (
    <Link
      href={"#"}
      className="flex flex-col items-center justify-center w-full h-[135px] gap-2 max-w-[250px] hover:opacity-80 duration-300 ease-in-out"
    >
      <div className="flex flex-row w-full items-start gap-2">
        <Book size="25" color="#FF8A65" />
        <h2>Advogado</h2>
      </div>

      <div className="flex h-fit p-4 bg-[#ffffff10] rounded-xl">
        <p className="text-sm">
          Criação e geração de ideias, Design assistido por IA, Otimização de
          design, Testes de usabilidade, Animação e efeitos visuais...
        </p>
      </div>
    </Link>
  );
}
