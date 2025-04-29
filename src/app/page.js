"use client";
import { useEffect } from "react";
import Image from "next/image";
import frontPage from "@/images/frontPage.jpg";
import ButtonFrontpage from "@/components/ButtonFronpage";

export default function Home() {
  useEffect(() => {
    // Overflow hidden sættes på body
    document.body.style.overflow = "hidden";

    // Rydder op når komponenten ikke vises på skræmen, så man kan scrolle igen
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative -mx-2">
      {/* Container for the image with 100vh height */}
      <div className="w-full h-screen">
        <Image src={frontPage} alt="Forside billede" quality={75} className="object-cover w-full h-full" />
      </div>

      {/* Content overlay on the image */}
      <div className="absolute p-4 left-5 bottom-50 sm:left-20 lg:left-50">
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
