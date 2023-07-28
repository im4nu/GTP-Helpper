import StackLayout from "@/layouts/Stack";
import { CardsData } from "../../../../../utils/cards";
import { ProfessionCard } from "@/components/ProfessionCard";

export default function ProfessionOptions() {
  const titleScreen = CardsData.filter((item) => item.title)
    .map((item) => item.title)
    .toString();
  return (
    <StackLayout routeName={titleScreen} titleScreen={titleScreen}>
      <div className="flex flex-col justify-evenly items-center min-h-[calc(100vh-100px)] h-full gap-4 py-6">
        <div className="flex flex-row flex-wrap justify-evenly gap-2 items-center">
          {CardsData.map((item) => (
            <>
              {item.profession.map((profession) => (
                <ProfessionCard
                  key={profession.id}
                  title={profession.title}
                  description={profession.description}
                  icon={item.icon}
                />
              ))}
            </>
          ))}
        </div>

        <div className="flex flex-col items-start w-full gap-2">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Não encontrou o que buscava? </p>
            <p className="text-white-200 text-xs">
              Inicie uma conversa por aqui e o gpt helpper já estará melhorando
              a comunicação!
            </p>
          </div>

          <input
            type="text"
            placeholder="“ Como utilizar o GPT Helpper? =) ”"
            className="flex w-full bg-white rounded-lg p-3 text-dark"
          />
        </div>
      </div>
    </StackLayout>
  );
}
