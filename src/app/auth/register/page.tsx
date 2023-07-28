import { AuthDialog } from "@/components/auth/Dialog";
import AuthRegisterForm from "@/components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <AuthRegisterForm />

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
