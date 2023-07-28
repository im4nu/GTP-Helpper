"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Função para calcular o tempo restante
  const calculateTimeRemaining = () => {
    const now = new Date();
    const targetTime = new Date(now.getTime() + 8 * 60 * 60 * 1000); // Adiciona 8 horas à hora atual
    const difference = targetTime.getTime() - now.getTime();

    return difference;
  };

  useEffect(() => {
    // Recupera o tempo inicial do localStorage ou calcula o tempo restante se não houver valor salvo
    // @ts-ignore
    const initialTime = parseInt(localStorage.getItem("initialTime"), 10);

    if (!isNaN(initialTime) && initialTime > 0) {
      setTimeRemaining(initialTime);
    } else {
      setTimeRemaining(calculateTimeRemaining());
    }

    // Atualiza o timer a cada segundo
    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining > 1000) {
          // Salva o novo valor do tempo restante no localStorage a cada atualização
          localStorage.setItem(
            "initialTime",
            (prevTimeRemaining - 1000).toString()
          );
          return prevTimeRemaining - 1000;
        } else {
          clearInterval(interval);
          // Limpa o valor do tempo inicial no localStorage quando o tempo chega a zero
          localStorage.removeItem("initialTime");
          return 0;
        }
      });
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  // Função para formatar o tempo restante em horas, minutos e segundos
  const formatTime = (time: number) => {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="flex flex-col text-center gap-2">
      <h1 className="text-sm">Tempo Restante:</h1>
      <p className="text-red-700 font-medium">{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default CountdownTimer;
