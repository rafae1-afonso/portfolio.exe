'use client';
import YearComponent from "@/components/atoms/YearComponent";
import TVComponent from "@/components/atoms/TVComponent";
import { BorderContext } from "@/providers/border-provider";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import NeonButton from "@/components/atoms/NeonButton";

export default function App() {
  const { setZoom } = useContext(BorderContext) as { setZoom: (value: boolean) => void };

  useEffect(() => {
    setZoom(false)
  }, [])

  return <>
    <TVComponent>
      <div className="flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-10">
          <p>&copy;</p>
          <YearComponent />
          <span>
            <Image src="/logo.png" alt="portfolio.exe" width={120} height={0} />
          </span>
        </div>
        <Image src="/chromelogo.png" alt="logo" width={400} height={0}
          className="
          animate-[blink_.2s_infinite]
          mx-auto
        "
        />
        <div className="group flex items-center justify-center mb-20 cursor-pointer">
          <NeonButton
            styleAdd="font-(Press Start 2P) text-2xl text-center cursor-pointer text-shadow-current group-hover:text-shadow-[0_0_10px_current] group-active:duration-75 group-active:opacity-0 group-active:scale-125"
            onClick={() => {
              redirect('/home')
            }}
          >
            PRESS ENTER
          </NeonButton>
        </div>
      </div>
    </TVComponent>
  </>;
}
