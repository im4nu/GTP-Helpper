"use client";

import { MessageText, Send2 } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InputChat() {
  const { push } = useRouter();
  return (
    <label
      onSubmit={() => push("")}
      className="flex flex-row items-center justify-center w-full bg-white rounded-lg p-3 text-dark gap-2"
    >
      <MessageText size="24" />

      <input
        type="text"
        placeholder="Como utilizar o GPT Helpper? =)"
        className="flex w-full text-gray text-sm"
      />

      <Link href={"/client/chat"}>
        <Send2 size="24" color="#602CA1" />
      </Link>
    </label>
  );
}
