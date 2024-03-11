"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import styles from "./CertCard.module.css";

interface CertCardProps {
  title: string;
  imgSrc: string | StaticImageData;
  date: string;
  issuer: string;
  desc: string;
  frame: string;
}

const CertCard: React.FC<CertCardProps> = ({
  title,
  imgSrc,
  date,
  issuer,
  desc,
  frame,
}) => {
  // handles when user clicks on cert image to enlarge
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  // zoomLevel adjusts scale and cursor style
  const zoomLevel = isZoomed
    ? `${styles.zoomed} cursor-zoomOut`
    : `${styles.default} cursor-zoomIn`;

  return (
    // container div for left and right sides
    <div className="flex flex-row w-2/3 m-auto my-6 border rounded-md shadow-xl border-neutral-950 bg-neutral-500">
      {/*  left side div */}
      <div className={`flex flex-col w-2/4 ${zoomLevel}`}>
        <Image
          src={imgSrc}
          width={400}
          height={300}
          alt="Diploma/Certificate"
          className={frame}
          onClick={handleZoomClick}
        />
      </div>
      {/*  right side div  */}
      <div className="flex flex-col flex-wrap w-3/4 m-4">
        <p className="my-2 text-5xl">{title}</p>
        <p className="my-2 text-2xl">{date}</p>
        <p className="my-2 text-4xl">{issuer}</p>
        <p className="my-2 text-2xl">{desc}</p>
      </div>
    </div>
  );
};

export default CertCard;
