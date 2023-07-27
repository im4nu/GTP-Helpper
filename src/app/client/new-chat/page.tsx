import { JobCards } from "@/components/JobCards";
import StackLayout from "@/layouts/Stack";

export default function Jobs() {
  return (
    <StackLayout>
      <div className="flex flex-col items-center w-full justify-center h-full">
        <div className="flex flex-col items-start w-full mt-4">
          <p className="text-xs text-white-200">Início {">"} Profissões</p>
          <h1 className="text-2xl">Perfil do usuário</h1>
        </div>

        <div className="flex flex-row flex-wrap justify-around gap-2 h-[calc(100vh-200px)] items-center py-4">
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
          <JobCards />
        </div>
      </div>
    </StackLayout>
  );
}
