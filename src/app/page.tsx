"use client";

import Step from "@/components/Step";
import PersonalInfo from "@/components/sections/PersonalInfo";
import useStore from "@/store/use-store";
import Accounts from "@/components/sections/Accounts";
import Import from "@/components/sections/Import";

export default function Home() {
  const { step } = useStore((state) => state);

  return (
    <main>
      <div>
        <section className="relative h-[172px] w-full bg-[url('/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:hidden">
          <div className="flex justify-center pt-[37px] pb-[34px]">
            <Step stepNumber={1} />
            <Step stepNumber={2} />
            <Step stepNumber={3} />
          </div>
        </section>
        {step === 1 && <PersonalInfo />}
        {step === 2 && <Accounts />}
        {step === 3 && <Import />}
      </div>
    </main>
  );
}
