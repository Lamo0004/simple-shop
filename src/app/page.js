"use client";
import Image from "next/image";
import frontPage from "@/images/frontPage.jpg";
import ButtonFrontpage from "@/components/ButtonFronpage";

export default function Home() {
  return (
    <div className="relative h-[88vh] sm:h-[94vh] overflow-hidden">
      <Image src={frontPage} alt="Forside billede" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute bottom-20 left-5 sm:left-20 lg:left-50 p-4">
        <div>
          <h1 className="text-4xl font-bold">10% Spring SALE☀️</h1>
          <div className="my-8">
            <ButtonFrontpage title="SHOP NU" href="/produkter" />
          </div>
        </div>
      </div>
    </div>
  );
}
