"use client";

import { Button } from "@/components/Button";
import StackLayout from "@/layouts/Stack";
import Image from "next/image";
import { useEffect, useState } from "react";
import { userData } from "../../../../utils/user";
import Link from "next/link";
import { LogoutCurve } from "iconsax-react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (firstTime === false) {
      localStorage.setItem("firstTime", JSON.stringify(firstTime));
    }
  }, [firstTime]);

  useEffect(() => {
    const storedFirstTime = localStorage.getItem("firstTime");
    if (storedFirstTime !== null) {
      setFirstTime(JSON.parse(storedFirstTime));
    }
  }, [firstTime]);

  const { push } = useRouter();

  return (
    <StackLayout routeName="Perfil do Usuário" titleScreen="Perfil do Usuário">
      {firstTime ? (
        <>
          <div className="flex flex-col gap-6 items-center h-[calc(100vh-300px)] justify-center">
            <p className="text-3xl font-medium">Seja bem vindo explorador!</p>
            <p className="text-sm text-white-200">
              Esse é o lugar onde você personaliza seus dados e descobre um
              pouco mais sobre quem você realmente é
            </p>
            <Image
              src={"/img/avatars.png"}
              width={300}
              height={300}
              alt="Imagens de perfil"
            />
            <p className="text-sm text-white-200">
              Experimente mudar sua foto, editar seus dados, consultar pontos e
              muito mais!
            </p>

            <p className="text-sm text-white-200">Tá esperando o que?</p>
            <Button onClick={() => setFirstTime(!firstTime)}>Vamos lá!</Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col w-full items-center h-[calc(100vh-180px)] justify-evenly">
          <div className="flex flex-row w-full items-center justify-around">
            <div className="flex flex-col items-start w-1/3 gap-4">
              <Image
                src={userData.image}
                width={150}
                height={150}
                alt="Imagem de perfil do usuário"
              />
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white-200">Meu nome:</p>
                <p>{userData.name}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white-200">Meu Email:</p>
                <p>{userData.email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white-200">Meu Plano:</p>
                <p>{userData.plan}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-white-200">
                  Uso o GPT Helpper desde:
                </p>
                <p>{userData.createdAt}</p>
              </div>

              <Button>Editar dados</Button>
            </div>

            <div className="flex flex-col items-center w-1/3 gap-4">
              <p className="text-2xl">Meus Créditos</p>
              <Image
                src={"/img/credits.png"}
                width={300}
                height={300}
                alt="Imagem de créditos"
              />

              <p>
                <span className="font-semibold">{userData.credits}</span>{" "}
                créditos disponíveis
              </p>

              <Button
                variant={"containedGreen"}
                onClick={() => push("/client/plans")}
              >
                Adquirir mais créditos
              </Button>
            </div>
          </div>

          <div className="flex w-full items-center justify-end gap-8">
            <Link
              href={"#"}
              className="flex flex-row items-center gap-2 hover:opacity-60 ease-in-out duration-300"
            >
              <Image
                alt="Imagem de de ajuda"
                src={"/avatars/confused.png"}
                width={50}
                height={50}
              />
              <p className="text-xs underline">Precisa de ajuda?</p>
            </Link>

            <Link
              href={"/auth/login"}
              className="flex flex-row items-center gap-2 hover:opacity-60 ease-in-out duration-300"
            >
              <LogoutCurve size="32" />
              <p className="text-xs underline">Sair da sua conta</p>
            </Link>
          </div>
        </div>
      )}
    </StackLayout>
  );
}
