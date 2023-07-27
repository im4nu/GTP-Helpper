import Sidebar from "@/components/Sidebar";
import { ArrowLeft2, SmsNotification } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface StackLayoutProps {
  children: ReactNode;
}

const userData = {
  name: "Emmanuel Rodrigues",
  email: "meuemail@gmail.com",
  image: "/avatars/man-in-purple.png",
};

export default function StackLayout({ children }: StackLayoutProps) {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-start">
      <div className="flex w-full justify-end items-end">
        <Link
          href={"#"}
          className="flex rounded-full bg-white items-center text-main"
        >
          <ArrowLeft2 />
        </Link>

        <Link href={"#"} className="flex flex-row w-fit gap-4 items-center p-4">
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

      {children}
    </main>
  );
}
