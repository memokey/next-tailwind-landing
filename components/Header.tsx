import { useEffect } from "react"
import { SecondaryButton } from "./Common/Buttons"
import { WalletIcon } from "./Icon"
import { useRouter } from "next/router"

export default function Header() {
  const router = useRouter();

  return (
    <div className="fixed top-0 navbar bg-base-100 z-20">
      <div className="w-[952px] m-auto">
        <div className="flex-1">
          <a className="normal-case text-xl font-bold cursor-pointer">Mindgem</a>
        </div>
        <div className="flex-none">
          <SecondaryButton 
            caption={"Get Early Access"}
            icon={<WalletIcon />}
            onClick={() => {
              router.push('https://form.waitlistpanda.com/go/dLmI6UBpq3mijYZFWSeD')
            }}
           />
          {/* <Button chainStatus={"icon"} /> */}
        </div>
      </div>
    </div>
  )
}
