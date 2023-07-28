"use client";

import { useTourStep } from "@/contexts/TourStepContext";
import Image from "next/image";

export default function TourTip() {
  const { setTourStep: setTourStep } = useTourStep();
  return (
    <div className="flex absolute bottom-0 right-0 animate-pulse ease-linear duration-500">
      <button
        onClick={() => setTourStep(0)}
        className="rounded-t-xl rounded-bl-xl border-dark border bg-white px-3 py-2 text-dark h-fit text-xs font-semibold"
      >
        Fazer tour
      </button>

      <Image src={"/robot/tip.png"} alt="Dica" width={60} height={30} />
    </div>
  );
}
