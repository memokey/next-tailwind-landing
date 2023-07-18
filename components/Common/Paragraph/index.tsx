import React from "react";

export type ParagraphType = {
  title: any;
  content: any;
  type: string;
  style?: string;
}

const Paragraph = (props: ParagraphType) => {
  return (
    <>
      <div className={`text-[#5B4EF1] text-[12px] font-bold mb-4 flex ${props.style && props.style == 'center' ? 'justify-center': ''}`}>{props.type}</div>
      <h1 className={`text-[45px] font-bold text-black leading-[44px] mb-4 flex ${props.style && props.style == 'center' ? 'text-center justify-center': ''}`}>
        {props.title}
      </h1>
      <div className={`text-[16px] text-[#020D27] font-light flex ${props.style && props.style == 'center' ? 'text-center justify-center': ''}`}>
        {props.content}
      </div>
    </>
  );
}

export default Paragraph;