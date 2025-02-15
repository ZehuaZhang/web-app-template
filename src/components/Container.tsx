"use client";

import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import React from "react";
import Footer from "./Footer";
import useStore from "@/store/use-store";

type TContainer = {
  children: React.ReactNode;
  className?: string;
  onNext: () => void;
  onPreviousStep?: () => void;
};

export default function Container({
  children,
  className,
  onNext,
  onPreviousStep,
}: TContainer) {
  const { isSubmitted } = useStore((state) => state);
  return (
    <section
      className={cn(
        "w-80 px-6 py-8 lg:px-[100px] lg:pt-10 bg-c-neutral-white lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[103px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[103px] lg:p-4 min-h-[376px] lg:min-h-[600px] lg:gap-[100px]",
        className
      )}
    >
      <Sidebar />
      <div
        className={cn(
          "w-full mr-[80px] relative flex flex-col justify-between",
          { "justify-center": isSubmitted }
        )}
      >
        <div>{children}</div>
        {!isSubmitted && (
          <Footer
            onHandleNextStep={onNext}
            onHandlePreviousStep={onPreviousStep}
          />
        )}
      </div>
    </section>
  );
}

{
  /* {!isSubmitted && (
				<Footer
					className={cn(
						"inline-flex lg:hidden absolute bottom-0 left-0 right-0",
						{ "-bottom-32": step === 2 }
					)}
					onHandleNextStep={onNext}
					onHandlePreviousStep={onPreviousStep}
				/>
			)} */
}
