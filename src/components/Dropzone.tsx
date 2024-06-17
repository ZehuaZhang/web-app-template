"use client";

import { useCallback } from "react";
import { useDropzone, Accept, FileRejection } from "react-dropzone";
import { cn } from "@/lib/utils";
import UploadIconIcon from "./icons/UploadIcon";

interface IDropzoneProps {
  accept?: Accept;
  actionLabel?: string;
  disabled?: boolean;
  errMsg?: string;
  onAcceptFile?: (file: File) => void;
  onRejectFile?: (file: FileRejection) => void;
  onChange: (file: File) => void;
}

export default function Dropzone({
  actionLabel,
  accept = {
    "image/*": [],
  },
  errMsg,
  disabled = false,
  onAcceptFile = () => {},
  onRejectFile = () => {},
  onChange,
}: IDropzoneProps) {
  const onDrop = useCallback(
    async (files: Array<File>, rejFiles: Array<FileRejection>) => {
      const [file] = files || [];
      if (file) {
        onAcceptFile(file);
      }
      const [rejFile] = rejFiles || [];
      if (rejFile) {
        onRejectFile(rejFile);
      }

      if (file) {
        onChange(file);
      }
    },
    [onAcceptFile, onChange, onRejectFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 10 * 1024 * 1024,
    accept,
    maxFiles: 1,
    multiple: false,
    disabled,
    onDrop,
  });

  return (
    <div
      {...getRootProps({
        className: cn(
          "dropzone placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue h-40 cursor-pointer border-2 border-blue-400 border-dashed rounded-lg bg-blue-10 hover:bg-blue-50",
          {
            "border-c-primary-strawberry-red": errMsg,
          }
        ),
      })}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center h-full">
        <UploadIconIcon />
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {actionLabel}
        </p>
      </div>
    </div>
  );
}
