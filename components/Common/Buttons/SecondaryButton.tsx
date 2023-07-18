import React from "react";

type SecondaryButtonType = {
  caption: string;
  icon?: any;
  onClick: any;
  disabled?: boolean;
  styles?: string
}

const SecondaryButton = (props: SecondaryButtonType) => {
  return (
    <button 
      className={`
        font-semibold border bg-violetWeak border-transparent text-violetStrong px-10 text-[16px]
        h-full flex items-center justify-center py-2 px-6 rounded-[12px] hover:border-violetStrong active:text-yeStrong
        ${props.disabled ? 'text-[#020D27] hover:bg-violetWeak hover:border-transparent': ''}
        ${props.styles}`}
      onClick={() => {
        if(!props.disabled) {
          props.onClick();
        }
      }}
    >
      <div className="font-semibold">
        {props.icon}
      </div>&nbsp;&nbsp;
      {props.caption}
    </button>
  );
}

export default SecondaryButton;