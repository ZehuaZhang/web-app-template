"use client";

import SectionHeader from "../SectionHeader";
import Container from "../Container";
import useStore from "@/store/use-store";
import { Button } from "../ui/button";
import GoogleButtonIcon from "../icons/GoogleButtonIcon";
import MicrosoftButtonIcon from "../icons/MicrosoftButtonIcon";
import LinkedinButtonIcon from "../icons/LinkedinButtonIcon";

export default function Accounts() {
  const { step, increaseStep, decreaseStep } = useStore((state) => state);

  const onNext = () => {
    increaseStep(step);
  };

  const onPrevious = () => {
    decreaseStep(step);
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <SectionHeader
        title="Accounts"
        description="Link to your work, personal, or Linkedin accounts"
      />
      <section className="mt-[22px] flex flex-col gap-4">
        <Button variant="outline" className="w-full">
          <GoogleButtonIcon className="h-5 w-5 mr-2" />
          Sign In with Google
        </Button>
        <Button variant="outline" className="w-full">
          <MicrosoftButtonIcon className="h-5 w-5 mr-2" />
          Sign In with Microsoft
        </Button>
        <Button variant="outline" className="w-full">
          <LinkedinButtonIcon className="h-5 w-5 mr-2" />
          Sign In with Linkedin
        </Button>
      </section>
    </Container>
  );
}
