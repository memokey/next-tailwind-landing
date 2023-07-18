import React from "react";
import { GeneralPanel } from "../Panels";
import Paragraph from "../Paragraph";
import Image from "next/image";

export type GeneralCardType = {
  title: string;
  thumbnail: string;
  type: string;
  content: any;
}

const GeneralCard = (props: GeneralCardType) => {
  return (
    <GeneralPanel>
      <Image src={props.thumbnail} alt="prompts" width={400} height={280} className="w-[400px] mb-6 rounded-[32px]" />
      <Paragraph 
        title={props.title}
        type={props.type}
        content={props.content}
      />
    </GeneralPanel>
  );
}

export default GeneralCard;