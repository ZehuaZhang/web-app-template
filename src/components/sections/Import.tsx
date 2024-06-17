"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import useStore from "@/store/use-store";
import ThankYou from "./ThankYou";
import Dropzone from "../Dropzone";
import { FileRejection } from "react-dropzone";
import Papa from "papaparse";
import Image from "next/image";

const formSchema = z.object({
  file: z.instanceof(File).optional(),
});

type ValidationSchema = z.infer<typeof formSchema>;

export default function Import() {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { file: undefined },
  });
  const {
    setError,
    clearErrors,
    control,
    formState: { errors, isSubmitSuccessful },
  } = form;

  const { step, decreaseStep, onSubmit } = useStore((state) => state);

  const onPrevious = () => {
    decreaseStep(step);
  };

  const onSubmitHandler = (values: ValidationSchema) => {
    console.log(values);
    onSubmit();
  };

  const handleAcceptFile = async (file: File) => {
    clearErrors();
    const headers: Array<string> = await new Promise((resolve) => {
      Papa.parse(file, {
        complete(results) {
          const firstRow = results.data[0];
          if (firstRow) {
            resolve(firstRow as Array<string>);
          }
          resolve([]);
        },
      });
    });
    const set = new Set<string>(
      headers.map((c) => c.toLowerCase().trim()).filter(Boolean)
    );
    const requiredColumns = [
      "First Name",
      "Last Name",
      "URL",
      "Email Address",
      "Company",
      "Position",
      "Connected On",
    ];
    const missing = requiredColumns.some((c) => !set.has(c.toLowerCase()));
    if (missing) {
      setError("file", {
        type: "invalid-linkedin-file",
        message: "Invalid Linkedin CSV file",
      });
    }
  };

  const handleRejectFile = (file: FileRejection) => {
    if (file.errors?.[0]) {
      setError("file", {
        type: "file-type-error",
        message: file.errors[0].message,
      });
    }
  };

  return (
    <Container
      onNext={form.handleSubmit(onSubmitHandler)}
      onPreviousStep={onPrevious}
    >
      {isSubmitSuccessful ? (
        <ThankYou />
      ) : (
        <>
          <SectionHeader
            title="Linkedin Import"
            description="Import your Linkedin data using the following guide"
          />
          <section className="flex flex-col gap-6">
            <section className="flex flex-col gap-4">
              <Image
                src="/images/linkedin-import-instructions.png"
                alt="linkedin import step 1"
                width={454}
                height={300}
              />
              <Image
                src="/images/linkedin-import-instructions-2.png"
                alt="linkedin import step 2"
                width={454}
                height={300}
              />
            </section>
            <Form {...form}>
              <form onSubmit={() => form.handleSubmit(onSubmitHandler)}>
                <FormField
                  control={control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                        Linkedin Import File
                        <FormMessage>{errors.file?.message}</FormMessage>
                      </FormLabel>
                      <FormControl>
                        <Dropzone
                          accept={{ "text/csv": [] }}
                          actionLabel="CSV (Max 10mb)"
                          onChange={field.onChange}
                          errMsg={errors.file?.message}
                          onAcceptFile={handleAcceptFile}
                          onRejectFile={handleRejectFile}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </section>
        </>
      )}
    </Container>
  );
}
