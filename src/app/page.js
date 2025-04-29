"use client";
import Image from "next/image";
import frontPage from "@/images/frontPage.jpg";
import ButtonFrontpage from "@/components/ButtonFronpage";

export default function Home() {
  return (
    <div className="-mx-2">
      <div className="relative h-[88vh] sm:h-[92.5vh] overflow-hidden">
        <Image src={frontPage} alt="Forside billede" quality={75} className="object-cover" />
        <div className="absolute bottom-20 left-5 sm:left-20 lg:left-50 p-4">
          <div>
            <h1 className="text-4xl font-bold">10% Spring SALE☀️</h1>
            <div className="my-8">
              <ButtonFrontpage title="SHOP NU" href="/produkter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
