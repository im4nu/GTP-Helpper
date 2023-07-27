"use client";

import { Button } from "@/components/Button";
import StackLayout from "@/layouts/Stack";
import Image from "next/image";
import { useState } from "react";
import { userData } from "../../../../utils/user";
import { Link } from "@/components/Link";

export default function Profile() {
  const [firstTime, setFirstTime] = useState(true);

  return (
    <StackLayout>
      <div className="flex flex-col items-center w-full justify-center h-full">
        <div className="flex flex-col items-start w-full mt-4">
          <p className="text-xs text-white-200">
            Início {">"} Perfil do usuário
          </p>
          <h1 className="text-2xl">Perfil do usuário</h1>
        </div>

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
                Experimente mudar sua foto, editar seus dados, consultar pontos
                e muito mais!
              </p>
              <p className="text-sm text-white-200">Tá esperando o que?</p>
              <Button onClick={() => setFirstTime(!firstTime)}>
                Vamos lá!
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-row w-full items-center h-[calc(100vh-300px)]">
            <div className="flex flex-col items-start w-1/2 gap-4">
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

            <div className="flex flex-col items-center w-1/2 gap-4">
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

              <Link variant={"containedGreen"} href={"/"}>
                Adquirir mais créditos
              </Link>
            </div>
          </div>
        )}
      </div>
    </StackLayout>
  );
}
