"use client";

import Image from "next/image";
import { useEffect } from "react";
import { TourStepProvider, useTourStep } from "@/contexts/TourStepContext";
import { useRouter } from "next/navigation";

const tour = [
  {
    id: 0,
    title: "Olá, seja bem vindo(a)!",
    description:
      "Vamos fazer um tour! Aqui você consegue escolher dentre algumas profissões qual a melhor se encaixa na sua rotina e explorar a infinidade de recursos que disponibilizamos pra você",
    imageLink: "/robot/wellcome-1.png",
  },
  {
    id: 1,
    title: "Descubra um mundo de possibilidades",
    description:
      "Inicie um novo chat para descobrir tudo que a ferramenta tem a te oferecer. Contamos com uma ampla gama de profissões para te manter conectado e atualizado do poder que tem em usas mãos",
    imageLink: "/robot/wellcome-2.png",
  },
  {
    id: 2,
    title: "Agora é com você!",
    description:
      "Explore, crie, imagine, inove e aproveite tudo que a nossa plataforma dispõe pra você. E qualquer dúvida basta ir em seu perfil e selecionar a opção “precisa de ajuda?”. Nos veremo em breve, até mais! ",
    imageLink: "/robot/wellcome-3.png",
  },
  {
    id: 3,
    title: "",
    description: "",
    imageLink: "/robot/wellcome-3.png",
  },
];

export function ModalTour() {
  const { tourStep: tourStep, setTourStep: setTourStep } = useTourStep();
  const router = useRouter();

  // UseEffect para salvar o valor no localStorage sempre que ele for atualizado
  useEffect(() => {
    if (tourStep > 2) {
      localStorage.setItem("tourStep", JSON.stringify(tourStep));
    }
  }, [tourStep]);

  // UseEffect para recuperar o valor do localStorage quando o componente for montado
  useEffect(() => {
    const storedTourStep = localStorage.getItem("tourStep");
    if (storedTourStep !== null) {
      setTourStep(JSON.parse(storedTourStep));
    }
  }, [router, setTourStep]);

  function handleNextStep() {
    if (tourStep <= 2) {
      setTourStep((prevStep: number) => prevStep + 1);
    }
  }

  return (
    <TourStepProvider>
      {tourStep <= 2 && (
        <div
          className={`flex bg-white rounded-xl flex-col absolute text-dark w-[430px] min-h-[220px] h-fi p-4 ${
            tourStep === 0 ? "right-12 bottom-[15vh]" : ""
          } ${tourStep === 1 ? "left-12 top-[25vh]" : ""} ${
            tourStep === 2 ? "left-[40vw] top-[35vh]" : ""
          }`}
        >
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg">{tour[tourStep].title}</h4>
              <p className="text-gray text-xs">{tour[tourStep].description}</p>
            </div>

            <Image
              src={tour[tourStep].imageLink}
              alt="Robô"
              width={125}
              height={100}
            />
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-row text-xs w-[60%] justify-evenly items-center">
              <button
                onClick={() => setTourStep(3)}
                className="flex items-center flex-row gap-2"
              >
                <div className="flex rounded-lg bg-[#E6E6E6] items-center p-2">
                  <Image
                    src={"/svg/x.svg"}
                    alt="Close"
                    width={14}
                    height={14}
                  />
                </div>

                <p>Pular tour</p>
              </button>

              <button
                onClick={handleNextStep}
                className="flex items-center flex-row-reverse gap-2"
              >
                <div className="flex rounded-lg bg-[#E6E6E6] items-center p-2">
                  <Image
                    src={"/svg/next.svg"}
                    alt="Next"
                    width={14}
                    height={14}
                  />
                </div>

                <p>Próximo</p>
              </button>
            </div>

            <p className="text-xs">{tourStep + 1}/3</p>
          </div>
        </div>
      )}
    </TourStepProvider>
  );
}
