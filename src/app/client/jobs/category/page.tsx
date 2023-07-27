import { JobCards } from "@/components/JobCards";
import StackLayout from "@/layouts/Stack";

export default function Category() {
  return (
    <StackLayout>
      <div className="flex flex-col items-center w-full justify-center h-full">
        <div className="flex flex-col items-start w-full mt-4">
          <p className="text-xs text-white-200">
            Início {">"} Profissões {">"} Advogado
          </p>
          <h1 className="text-2xl">Advogado</h1>
        </div>

        <div className="flex flex-col justify-evenly items-center h-[calc(100vh-100px)] ">
          <div className="flex flex-row flex-wrap justify-evenly gap-2 items-center">
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

          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex flex-row gap-2">
              <p>Não encontrou o que buscava? </p>
              <p>
                Inicie uma conversa por aqui e o gpt helpper já estará
                melhorando a comunicação!
              </p>
            </div>

            <input
              type="text"
              placeholder="“ Como utilizar o GPT Helpper? =) ”"
              className="flex w-full bg-white rounded-lg p-3 text-dark"
            />
          </div>
        </div>
      </div>
    </StackLayout>
  );
}
