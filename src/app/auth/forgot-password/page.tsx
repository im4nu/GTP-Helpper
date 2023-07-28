import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { SmsNotification } from "iconsax-react";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <div className="flex flex-col py-8 px-24 bg-white rounded-xl items-center justify-center gap-8 text-dark">
        <Image src={"/img/gpt-logo.png"} width={120} height={120} alt="logo" />

        <h1 className="text-xl font-medium">Esqueceu sua senha?</h1>
        <div className="flex text-sm flex-col items-start gap-1">
          <p>
            Relaxa...😌 Recupere-a em{" "}
            <span className="font-bold text-main">3 passos simples:</span>
          </p>
          <p>
            <span className="text-main font-bold">1.</span>{" "}
            <span className="font-bold text-main">
              Preencha seu endereço de e-mail
            </span>{" "}
            abaixo.
          </p>
          <p>
            <span className="text-main font-bold">2.</span>Enviaremos para o{" "}
            <span className="font-bold text-main">
              seu e-mail a troca de senha.
            </span>
          </p>
          <p>
            <span className="text-main font-bold">3.</span>Acesse a página e
            <span className="font-bold text-main">
              digite sua nova senha forte.
            </span>
          </p>
        </div>

        <Input
          inputType="email"
          placeholder="meuemail@gmail.com"
          startDecoration={<SmsNotification size="24" />}
        />

        <Button className="text-white" size={"large"}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
