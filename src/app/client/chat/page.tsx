import InputChat from "@/components/chat/Input";
import StackLayout from "@/layouts/Stack";
import Image from "next/image";

export default function Chat() {
  return (
    <StackLayout routeName="Chat" titleScreen="Chat">
      <div className="flex w-full min-h-[calc(100vh-200px)] h-full items-center flex-col justify-between gap-8 pb-[100px]">
        <div className="flex flex-col items-center gap-4">
          <p className="flex py-4 px-6 w-xs flex-wrap gradient-btn rounded-xl">
            Estabelecendo conexão com o servidor...
          </p>

          <Image
            src={"/svg/loader.svg"}
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full gap-8 animate-pulse">
          <div className="flex flex-row items-center w-full justify-start gap-4">
            <div className="flex rounded-full h-[67px] w-[67px] bg-[#B0B0B0]" />

            <div className="flex flex-col gap-2">
              <div className="flex rounded-lg w-[300px] h-[20px] bg-[#D9D9D9]" />
              <div className="flex rounded-lg w-[420px] h-[60px] bg-[#B0B0B0]" />
            </div>
          </div>

          <div className="flex flex-row-reverse items-center w-full justify-start gap-4">
            <div className="flex rounded-full h-[67px] w-[67px] bg-[#B0B0B0]" />

            <div className="flex flex-col gap-2">
              <div className="flex rounded-lg w-[300px] h-[20px] bg-[#D9D9D9]" />
              <div className="flex rounded-lg w-[420px] h-[120px] bg-[#B0B0B0]" />
            </div>
          </div>

          <div className="flex flex-row items-center w-full justify-start gap-4">
            <div className="flex rounded-full h-[67px] w-[67px] bg-[#B0B0B0]" />

            <div className="flex flex-col gap-2">
              <div className="flex rounded-lg w-[300px] h-[20px] bg-[#D9D9D9]" />
              <div className="flex rounded-lg w-[420px] h-[60px] bg-[#B0B0B0]" />
            </div>
          </div>
        </div>

        <div className="flex fixed bottom-6 z-20 w-1/3">
          <InputChat />
        </div>
      </div>
    </StackLayout>
  );
}
