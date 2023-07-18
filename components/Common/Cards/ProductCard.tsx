import React from "react";
import { GeneralPanel } from "../Panels";
import Paragraph from "../Paragraph";
import Image from "next/image";

export type ProductCardType = {
  title: string;
  tags: string[];
  thumbnail: string;
  price: number;
  moneyType: string;
}

const ProductCard = (props: ProductCardType) => {
  return (
    <div className="relative w-full bg-white z-10 rounded-[24px] h-[272px] cursor-pointer">
      <Image src={props.thumbnail} alt="thumbnail" width={220} height={152} className="w-full rounded-t-[24px]" />
      <div className="flex flex-col justify-between h-[120px] p-4">
        <div className="flex justify-between mb-2">
          <div className="font-semibold text-[#0B081B] text-[16px]">
            {props.title}
          </div>
          <div className="text-[#020D27] font-light text-[14px]">
            {props.moneyType}{props.price}
          </div>
        </div>
        <div className="flex gap-2">
          {props.tags.map((tag, index) => (
            <div className="bg-[#DCD9FC] rounded-[8px] text-[#5B4EF1] px-3 py-1 text-[12px]" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;