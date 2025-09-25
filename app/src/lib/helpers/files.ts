import { SUPPORTED_FILE_EXTENSIONS } from "../constants/form";

export function checkValidFileType(fileName: string) {
  const extension = "." + fileName.toLowerCase().split(".").pop();
  return SUPPORTED_FILE_EXTENSIONS.includes(extension);
}
