import React, { useEffect } from "react"
import { GeneralPanel } from "../Common/Panels"
import { PrimaryButton } from "../Common/Buttons"
import { LANDING_CARDS, LANDING_PRODUCTS } from "../../data"
import Paragraph from "../Common/Paragraph"
import Image from "next/image"
import { GeneralCard, ProductCard } from "../Common/Cards"
import { GeneralCardType } from "../Common/Cards/GeneralCard"
import Link from "next/link"
import { useRouter } from "next/router"
import posthog from 'posthog-js'

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    posthog.init('phc_yjyrDfN1rFJx4UPEEMhxDRLhlELrsgydKzabuaFz5MV', { api_host: 'https://app.posthog.com' })
    posthog.capture('User visited')
  }, [])

  return (
    <>
      <div className="py-[56px]">
        <GeneralPanel
          title="Mindgem"
          style="!w-[952px] m-auto"
        >
          <div className="pt-[55px] px-[80px] leading-tight">
            <div className="text-[64px] text-black font-bold text-center mb-12">
              Grow with <span className="text-[#5B4EF1] leading-tight">AI Templates</span>
            </div>
            <div className="text-[#747474] text-[26px] mt-[8px] text-center mb-8 tracking-tight">
              Your AI Workspace. Boost your productivity with smarter interaction with the universe of LLMs
            </div>
            <div className="flex justify-center">
              <PrimaryButton
                caption={"Chat"}
                onClick={() => {
                  posthog.capture('User went to app.mindgem.ai', { property: 'value' })
                  router.push('https://app.mindgem.ai/');
                }}
              />
            </div>
          </div>
        </GeneralPanel>
      </div>
      <div className="pb-[56px]">
        <GeneralPanel
          style="!w-[952px] m-auto"
        >
          <div className="grid grid-cols-2 gap-[80px]">
            <div className="col-span-1">
              <Paragraph
                title={<p>Curated <br/>Prompts Repository</p>} 
                content={<p>Simplify complex product<br/> management tasks with our user-<br/>
                  friendly templates</p>}
                type={'Remix Business Prompts'}
              />
            </div>
            <div className="col-span-1">
              <Image src="/images/landing/prompts.png" alt="business" width={400} height={280} className="rounded-[16px] w-[400px] h-[280px]" />
            </div>
          </div>
        </GeneralPanel>
        <div className="my-8 !w-[952px] m-auto">
          {/* <div className="w-full text-center jusity-center text-[#141414] text-[32px] mb-8">
            Hot Prompts on <span className="text-[#020D27] text-[45px] font-bold border-b-[2px] border-[#7678ED] border-dashed">marketplace</span> 
          </div> */}
          <div className="flex gap-6">
            {LANDING_PRODUCTS.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
        <div className="!w-[952px] m-auto grid grid-cols-2 gap-6 mt-[40px]">
          {LANDING_CARDS.map((card: GeneralCardType, index: number) => (
            <div className="col-span-1" key={index}>
              <GeneralCard 
                {...card}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="py-[56px]">
        <GeneralPanel
          style="!w-[952px] m-auto"
          bgImg="/images/landing/windows.png"
        >
          <div className="w-[555px] m-auto">
            <Paragraph 
              style={'center'}
              type={'STAY IN TOUCH'}
              title={'Stay in touch!'}
              content={''}
            />
            <div className="flex gap-2 mt-[22px] justify-center mb-[35px]">
              <input 
                type="text" 
                className="px-[20px] py-[16px] border focus-visible:outline-[#BFBFBF] text-[#0B081B] text-[16px] bg-[#F7F6F7] rounded-[16px] w-[300px]"
                placeholder="Your Email" 
              />
              <PrimaryButton 
                caption={"Subscribe"}
                onClick={() => {}}
              />
            </div>
          </div>
        </GeneralPanel>
      </div> */}
      <div className="bg-white">
        <div className="w-[952px] mx-auto py-[64px] flex justify-between text-[16px] text-[#BFBFBF]">
            <div className="">Mindgem &copy; 2023</div>
            <div className="text-[#0B081B] text-[25px] font-bold">Mindgem</div>
            <div className="flex gap-[33px]">
              <Link href="https://twitter.com/mindgemHQ" className="cursor-pointer">twitter</Link>
            </div>
        </div>
      </div>
    </>
  )
}