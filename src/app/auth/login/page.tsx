import { AuthDialog } from "@/components/auth/Dialog";
import AuthLoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center relative">
      <AuthLoginForm />

      <AuthDialog
        title={
          <h2 className="text-lg">
            Ainda não possui{" "}
            <span className="text-main font-bold">cadastro?</span>
          </h2>
        }
        description={
          <p className="text-gray text-xs">
            Cadastre-se gratuitamente e aproveite{" "}
            <span className="font-semibold">
              {" "}
              ofertas exclusivas de boas vindas nas primeiras 8 horas!
            </span>
          </p>
        }
        link="/auth/register"
        buttonText="Cadastrar-se"
      />
    </div>
  );
}
