"use client";

import blaaFisk from "@/images/blaaFisk.jpg";
import orangeFisk from "@/images/orangeFisk.jpg";
import sandFisk from "@/images/sandFisk.png";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlider() {
  const images = [blaaFisk, orangeFisk, sandFisk]; // Placeholder lige nu //
  const [mainImage, setMainImage] = useState(images[0]); // Viser det første billede som hovedbillede //

  return (
    <div className="flex flex-col gap-6 m-4 md:items-end">
      {/* Det store billede */}
      <div className="w-full max-w-[500px] h-[350px] relative">
        <Image src={mainImage} alt="Hovedbillede" fill className="shadow-sm object-cover" />
      </div>

      {/* De tre mindre billeder */}
      <div className="flex w-full max-w-[500px]">
        {images.map((src, index) => (
          <div key={index} className={`shadow-sm relative w-1/3 aspect-square cursor-pointer overflow-hidden border-2 transition duration-200 ${mainImage === src ? "border-orange-400" : "border-transparent"}`} onClick={() => setMainImage(src)}>
            <Image src={src} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
