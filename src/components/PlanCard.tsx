import { Button } from "./Button";

interface PlanCardProps {
  title: string;
  price: string;
  benefit: {
    id: number;
    description: string;
  }[];
}

export function PlanCard({ title, price, benefit }: PlanCardProps) {
  return (
    <div className="flex flex-col items-center justify-between w-xs h-[550px] text-dark rounded-xl bg-white">
      <div className="flex flex-col text-center gap-4 px-12 h-1/3 justify-center">
        <h2 className="text-2xl font-medium">{title}</h2>

        <p className="text-4xl">
          {price} <span className="text-base">/ mês</span>
        </p>
      </div>

      <div className="flex flex-col bg-[#E8E8ED] w-full h-2/3 justify-evenly px-12 py-3 items-center rounded-b-xl">
        <div className="flex flex-col items-start pl-4 gap-2">
          {benefit.map((item) => (
            <div key={item.id} className="flex flex-row items-center gap-3">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.4639 2.08512L8.33053 16.2184C8.20536 16.3447 8.03496 16.4156 7.8572 16.4156C7.67944 16.4156 7.50904 16.3447 7.38387 16.2184L0.1972 9.03174C0.0709868 8.90667 0 8.73627 0 8.5584C0 8.38067 0.0709868 8.21027 0.1972 8.08507L1.13053 7.15174C1.25571 7.0256 1.42611 6.95454 1.60387 6.95454C1.78163 6.95454 1.95203 7.0256 2.0772 7.15174L7.85053 12.9251L20.5839 0.19179C20.8476 -0.06393 21.2668 -0.06393 21.5305 0.19179L22.4639 1.13846C22.5901 1.26363 22.6611 1.43403 22.6611 1.61179C22.6611 1.78955 22.5901 1.95994 22.4639 2.08512Z"
                  fill="#602CA2"
                  fill-opacity="0.8"
                />
              </svg>

              <p className="text-xs">{item.description}</p>
            </div>
          ))}
        </div>

        <Button className="text-white">Assinar</Button>
      </div>
    </div>
  );
}
