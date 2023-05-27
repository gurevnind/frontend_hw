import Image from "next/image";
import React from "react";

export const CharactersCard = ({ name, disc, image }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "50px"}}>
      <Image src={image} width={240} height={168} />
      <span>{name}</span>
      <span>{disc}</span>
    </div>
  );
};
