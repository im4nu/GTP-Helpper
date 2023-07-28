import { Book } from "iconsax-react";
import Link from "next/link";

interface ProfessionProps {
  title?: string;
  description?: string;
  icon?: JSX.Element;
  link?: string;
}

export function ProfessionCard({
  title,
  description,
  icon,
  link,
}: ProfessionProps) {
  return (
    <Link
      href={link ?? "/client/new-chat/profession"}
      className="flex flex-col items-center justify-center w-full h-fit gap-2 max-w-[250px] hover:opacity-80 duration-300 ease-in-out"
    >
      <div className="flex flex-row w-full items-center gap-2">
        {icon ?? <Book size="25" color="#FF8A65" />}
        <h2 className="text-sm">{title ?? "Nenhuma profissão definida"}</h2>
      </div>

      <div className="flex p-6 bg-[#ffffff10] rounded-xl min-h-[130px] items-center justify-center">
        <p className="text-xs font-medium">
          {description ??
            "Esse card não contém descrição pois nenhuma profissão foi vinculada a ele"}
        </p>
      </div>
    </Link>
  );
}
