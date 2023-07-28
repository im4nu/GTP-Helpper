"use client";

import { Link } from "@/components/Link";
import { Input } from "@/components/auth/Input";
import { Eye, EyeSlash, PasswordCheck, SmsNotification } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function AuthLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="flex flex-col py-8 px-24 bg-white rounded-xl items-center justify-center gap-8 text-dark">
      <Image src={"/avatars/happy.png"} width={120} height={120} alt="logo" />

      <div className="flex flex-col text-center">
        <h1 className="text-xl font-medium">GPT Helper</h1>
        <p className="text-sm font-white-200">Seja bem vindo, faça login</p>
      </div>

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
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye size="24" /> : <EyeSlash size="24" />}
          </button>
        }
      />

      <div className="flex w-full justify-end">
        <Link
          href={"/auth/forgot-password"}
          className="text-main text-xs underline"
          variant={"none"}
        >
          Esqueceu sua senha?
        </Link>
      </div>

      <Link className="text-white" href={"/"} size={"large"}>
        Entrar
      </Link>
    </form>
  );
}
