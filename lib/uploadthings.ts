import { OurFileRouter } from "@/app/api/webhook/clerk/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
