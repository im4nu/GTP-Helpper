"use client";

import { Button } from "@/components/Button";
import StackLayout from "@/layouts/Stack";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [firstTime, setFirstTime] = useState(true);
  return (
    <StackLayout>
      <div className="flex flex-col items-center w-full justify-center h-full">
        {firstTime ? (
          <>
            <div className="flex flex-col items-start w-full mt-4">
              <p className="text-xs text-white-200">
                Início {">"} Perfil do usuário
              </p>
              <h1 className="text-2xl">Perfil do usuário</h1>
            </div>

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
          <h1>Tela de perfil em desenvolvimento</h1>
        )}
      </div>
    </StackLayout>
  );
}
