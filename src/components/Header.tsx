import { SmsNotification } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

const userData = {
  name: "Emmanuel Rodrigues",
  email: "meuemail@gmail.com",
  image: "/avatars/man-in-purple.png",
};

export default function Header() {
  return (
    <Link
      href={"#"}
      className="flex flex-row w-full gap-4 justify-end items-center p-4"
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
  );
}
