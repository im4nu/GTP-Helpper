import { SmsNotification } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { userData } from "../../utils/user";

export default function Header() {
  const fullName = userData.name.trim();
  const namesArray = fullName.split(" ");
  const firstName = namesArray[0];
  const lastName = namesArray[namesArray.length - 1];
  return (
    <div className="flex w-full justify-end items-end">
      <Link
        href={"/client/profile"}
        className="flex flex-row w-fit gap-4 items-center p-4"
      >
        <div className="flex flex-col gap-1">
          <p className="font-bold">
            {firstName} {lastName}
          </p>

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
  );
}
