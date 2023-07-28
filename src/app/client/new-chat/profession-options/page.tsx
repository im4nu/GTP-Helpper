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
        <div className="flex flex-row flex-wrap justify-start gap-2 items-center">
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
      </div>
    </StackLayout>
  );
}
