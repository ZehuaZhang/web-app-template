import Image from "next/image";
import React from "react";

export default function ThankYou() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center">
      <div className="relative w-14 h-14 mb-6">
        <Image
          className="object-fill"
          src="/images/icon-thank-you.svg"
          alt="checkmark inside a circle"
          width={80}
          height={80}
        />
      </div>
      <h3 className="text-2xl lg:text-[32px] text-c-primary-marine-blue mb-[9px]">
        Thank you!
      </h3>
      <p className="text-c-neutral-cool-gray text-base">
        Thanks you for onboarding to PartnerHQ!
      </p>
    </section>
  );
}
