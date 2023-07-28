"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const toor = [
  {
    id: 0,
    title: "Olá, seja bem vindo(a)!",
    description:
      "Vamos fazer um toor! Aqui você consegue escolher dentre algumas profissões qual a melhor se encaixa na sua rotina e explorar a infinidade de recursos que disponibilizamos pra você",
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

export function ModalToor() {
  const [toorStep, setToorStep] = useState(0);

  // UseEffect para salvar o valor no localStorage sempre que ele for atualizado
  useEffect(() => {
    if (toorStep > 2) {
      localStorage.setItem("toorStep", JSON.stringify(toorStep));
    }
  }, [toorStep]);

  // UseEffect para recuperar o valor do localStorage quando o componente for montado
  useEffect(() => {
    const storedToorStep = localStorage.getItem("toorStep");
    if (storedToorStep !== null) {
      setToorStep(JSON.parse(storedToorStep));
    }
  }, []);

  function handleNextStep() {
    if (toorStep <= 2) {
      setToorStep((prevStep) => prevStep + 1);
    }
  }

  return (
    <>
      {toorStep <= 2 && (
        <div
          className={`flex bg-white rounded-xl flex-col absolute text-dark w-[430px] min-h-[220px] h-fi p-4 ${
            toorStep === 0 ? "right-12 bottom-[25vh]" : ""
          } ${toorStep === 1 ? "left-12 top-[20vh]" : ""} ${
            toorStep === 2 ? "left-[40vw] top-[35vh]" : ""
          }`}
        >
          <div className="flex flex-row items-center">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg">{toor[toorStep].title}</h4>
              <p className="text-gray text-xs">{toor[toorStep].description}</p>
            </div>

            <Image
              src={toor[toorStep].imageLink}
              alt="Robô"
              width={125}
              height={100}
            />
          </div>

          <div className="flex flex-row items-center">
            <div className="flex flex-row text-xs w-[60%] justify-evenly items-center">
              <button
                onClick={() => setToorStep(3)}
                className="flex items-center flex-row gap-2"
              >
                <div className="flex rounded-lg bg-[#E6E6E6] items-center p-2">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10L10 1M10 10L1 1"
                      stroke="#602CA2"
                      stroke-opacity="0.8"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <p>Pular toor</p>
              </button>

              <button
                onClick={handleNextStep}
                className="flex items-center flex-row-reverse gap-2"
              >
                <div className="flex rounded-lg bg-[#E6E6E6] items-center p-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24999 2.38L9.05332 6.18333C9.50249 6.6325 9.50249 7.3675 9.05332 7.81666L5.24999 11.62"
                      stroke="#602CA2"
                      stroke-opacity="0.8"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <p>Próximo</p>
              </button>
            </div>

            <p className="text-xs">{toorStep + 1}/3</p>
          </div>
        </div>
      )}
    </>
  );
}
