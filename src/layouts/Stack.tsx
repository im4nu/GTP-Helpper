import { ArrowLeft2, SmsNotification } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface StackLayoutProps {
  children: ReactNode;
  routeName?: string;
  titleScreen?: string;
}

const userData = {
  name: "Emmanuel Rodrigues",
  email: "meuemail@gmail.com",
  image: "/avatars/man-in-purple.png",
};

export default function StackLayout({
  children,
  routeName,
  titleScreen,
}: StackLayoutProps) {
  return (
    <main className="flex min-h-screen h-full w-screen flex-col items-center justify-start lg:px-[5vw] xl:px-[10vw] 2xl:px-[15vw]">
      <div className="flex w-full justify-between items-center">
        <Link
          href={"/"}
          className="flex rounded-full bg-white items-center text-main p-3"
        >
          <ArrowLeft2 size={"24"} />
        </Link>

        <Link
          href={"/client/profile"}
          className="flex flex-row w-fit gap-4 items-center p-4"
        >
          <div className="flex flex-col gap-1">
            <p className="font-bold">{userData.name}</p>

            <div className="flex w-full items-center text-xs gap-2">
              <SmsNotification size="12" />
              <p>{userData.email}</p>
            </div>
          </div>

          <Image
            src={userData.image}
            width={50}
            height={50}
            alt="Imagem de perfil do usuário"
            className="rounded-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center w-full justify-center h-full">
        <div className="flex flex-col items-start w-full mt-4">
          <p className="text-xs text-white-200">
            Início {">"} {routeName ?? "Sem nome definido para esta rota"}
          </p>
          <h1 className="text-2xl">
            {titleScreen ?? "Esta tela ainda não tem um título definido"}
          </h1>
        </div>

        {children}
      </div>
    </main>
  );
}
