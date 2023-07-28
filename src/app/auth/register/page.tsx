"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/auth/Input";
import { AuthDialog } from "@/components/auth/Dialog";
import {
  Eye,
  EyeSlash,
  PasswordCheck,
  SmsNotification,
  User,
} from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <form className="flex flex-col py-8 px-24 bg-white rounded-xl items-center justify-center gap-8 text-dark">
        <Image src={"/avatars/happy.png"} width={120} height={120} alt="logo" />

        <div className="flex flex-col text-center">
          <h1 className="text-xl font-medium">GPT Helper</h1>
          <p className="text-sm font-white-200">Cadastre-se</p>
        </div>

        {/* <button className="flex flex-row items-center gap-2 p-3 rounded-lg gradient-btn-rainbow">
          <Image
            src={"/img/googleLogo.png"}
            width={24}
            height={24}
            alt="logo do google"
          />
          Entrar com google
        </button> */}

        <Input
          inputType="name"
          placeholder="Meu nome"
          startDecoration={<User size="24" />}
        />

        <Input
          inputType="email"
          placeholder="meuemail@gmail.com"
          startDecoration={<SmsNotification size="24" />}
        />

        <Input
          inputType={showPassword ? "text" : "password"}
          placeholder="********"
          startDecoration={<PasswordCheck size="24" />}
          endDecoration={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size="24" /> : <EyeSlash size="24" />}
            </button>
          }
        />

        <Input
          inputType={showPassword ? "text" : "password"}
          placeholder="Confirme sua senha"
          startDecoration={<PasswordCheck size="24" />}
          endDecoration={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size="24" /> : <EyeSlash size="24" />}
            </button>
          }
        />

        <Button className="text-white" size={"large"}>
          Cadastrar
        </Button>
      </form>

      <AuthDialog
        title={
          <h2 className="text-lg">
            Já possui {""}
            <span className="text-main font-bold">cadastro?</span>
          </h2>
        }
        description={
          <p className="text-gray text-xs font-semibold">Entre agora!</p>
        }
        buttonText="Entrar"
        link="/auth/login"
      />
    </div>
  );
}
