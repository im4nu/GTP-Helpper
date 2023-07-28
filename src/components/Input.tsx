import { Icon, SmsNotification } from "iconsax-react";
import { type } from "os";
import React, { ReactNode } from "react";

interface InputProps {
  placeholder: string;
  inputType?: string;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
}

export function Input({
  placeholder,
  inputType,
  startDecoration,
  endDecoration,
}: InputProps) {
  return (
    <label className="flex flex-row rounded-lg gap-4 bg-dark items-center p-3 w-full h-fit text-white-200">
      {startDecoration}
      <input
        type={inputType ?? "text"}
        placeholder={placeholder}
        className="flex bg-dark"
      />
      {endDecoration}
    </label>
  );
}
