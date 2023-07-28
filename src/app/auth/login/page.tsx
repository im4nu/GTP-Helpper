"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Eye, EyeSlash, PasswordCheck, SmsNotification } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <div className="flex flex-col py-8 px-24 bg-white rounded-xl items-center justify-center gap-8 text-dark">
        <Image src={"/img/gpt-logo.png"} width={120} height={120} alt="logo" />

        <h1 className="text-xl font-medium">Login</h1>

        <button className="flex flex-row items-center gap-2 p-3 rounded-lg gradient-btn-rainbow">
          <Image
            src={"/img/googleLogo.png"}
            width={24}
            height={24}
            alt="logo do google"
          />
          Entrar com google
        </button>

        <Input inputType="email" placeholder="meuemail@gmail.com" />

        <Input
          inputType={showPassword ? "text" : "password"}
          placeholder="meuemail@gmail.com"
          startDecoration={<PasswordCheck size="24" />}
          endDecoration={
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size="24" /> : <EyeSlash size="24" />}
            </button>
          }
        />

        <div className="flex w-full justify-end">
          <Link
            href={"/auth/reset-password"}
            className="text-main text-xs underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button className="text-white" size={"large"}>
          Entrar
        </Button>
      </div>
    </div>
  );
}