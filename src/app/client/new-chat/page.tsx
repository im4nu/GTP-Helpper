import StackLayout from "@/layouts/Stack";
import { CardsData } from "../../../../utils/cards";
import { ProfessionCard } from "@/components/ProfessionCard";

export default function Jobs() {
  return (
    <StackLayout routeName="Profissões" titleScreen="Profissões">
      <div className="flex flex-row flex-wrap justify-start gap-2 h-[calc(100vh-200px)] w-full items-start py-4">
        {CardsData.map((item) => (
          <ProfessionCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            link="/client/new-chat/profession-options"
          />
        ))}
      </div>
    </StackLayout>
  );
}
