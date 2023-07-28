"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface TourStepContextData {
  tourStep: number;
  setTourStep: React.Dispatch<React.SetStateAction<number>>;
}

const TourStepContext = createContext<TourStepContextData>(
  {} as TourStepContextData
);

interface TourStepProviderProps {
  children: ReactNode;
}

export const TourStepProvider: React.FC<TourStepProviderProps> = ({
  children,
}) => {
  const [tourStep, setTourStep] = useState<number>(0);
  return (
    <TourStepContext.Provider
      value={{ tourStep: tourStep, setTourStep: setTourStep }}
    >
      {children}
    </TourStepContext.Provider>
  );
};

export function useTourStep(): TourStepContextData {
  const context = useContext(TourStepContext);
  if (!context) {
    throw new Error("useTourStep must be used within a TourStepProvider");
  }
  return context;
}
