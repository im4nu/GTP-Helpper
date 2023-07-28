import { Link } from "../Link";

interface AuthDialogProps {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  link: string;
}

export function AuthDialog({
  title,
  description,
  buttonText,
  link,
}: AuthDialogProps) {
  return (
    <div className="flex absolute items-center text-center py-6 px-2 top-4 w-[320px] h-fit flex-wrap text-dark right-4 rounded-b-xl rounded-tl-xl flex-col bg-white gap-3">
      {title}
      {description}
      <Link href={link} variant={"outlined"} size={"small"}>
        {buttonText}
      </Link>
    </div>
  );
}
