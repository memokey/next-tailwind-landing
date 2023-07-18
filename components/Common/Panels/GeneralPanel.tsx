import Image from "next/image";
import React from "react";

type PanelType = {
  title?: string;
  style?: string;
  children: any;
  bgImg?: string;
}

const GeneralPanel = (props: PanelType) => {
  return (
    <div className={`relative w-full h-full bg-white rounded-[40px] z-10 ${props.style? props.style: ''}`}>
      {props.bgImg && (
        <Image src={props.bgImg} width={10000} height={100000} alt="background" className="absolute top-0 left-0 right-0 bottom-0 -z-10" />
      )}
      {props.title && (
        <div className="rounded-t-[40px] h-[64px] border-b border-[#DCD9FC] flex items-center relative z-20">
          {/* <div className="absolute left-8 flex gap-6">
            {['#E03E53', '#FFC43D', '#9CE03E'].map((color, index) => (
              <div
                key={index}
                style={{backgroundColor: color}} 
                className={`rounded-full w-4 h-4`}
              ></div>
            ))}
          </div> */}
          <div className="flex w-full justify-center items-center text-[24px] font-bold">
            {props.title}
          </div>
        </div>
      )}
      <div className="rounded-[40px] p-8 z-20">
        {props.children}
      </div>
    </div>
  );
}

export default GeneralPanel;