// Validation rules
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const CONTACT_NUMBER_REGEX = /^[0-9+\-\s()]*$/;

// Validation messages
export const REQUIRED_MESSAGE = "This field is required.";
export const INVALID_EMAIL_MESSAGE = "Please enter a valid email address.";
export const INVALID_NUMBER_MESSAGE = "Please enter a valid number.";
export const TOO_LONG_MESSAGE = (max: number) =>
  `Maximum ${max} characters allowed.`;
export const INVALID_CONTACT_NUMBER_MESSAGE =
  "Please enter a valid contact number. Only digits, spaces, parentheses, hyphens, and plus signs are allowed.";

export const NAME_MAX_LENGTH = 100;
export const EMAIL_ADDRESS_MAX_LENGTH = 100;
export const SUBJECT_MAX_LENGTH = 200;
export const BODY_MAX_LENGTH = 5000;
export const CONTACT_NUMBER_MAX_LENGTH = 20;

export const SUPPORTED_FILE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".pdf",
  // CAD Files - Generic formats
  ".dwg",
  ".dxf",
  ".dwf",
  // STEP files
  ".step",
  ".stp",
  // IGES files
  ".iges",
  ".igs",
  // STL files
  ".stl",
  // SolidWorks files
  ".sldprt",
  ".sldasm",
  ".slddrw",
  ".slddrt",
  // Other common CAD formats
  ".ipt",
  ".iam", // Autodesk Inventor
  ".prt",
  ".asm", // Pro/Engineer, Creo
  ".catpart",
  ".catproduct", // CATIA
  ".x_t",
  ".x_b", // Parasolid
  ".sat", // ACIS
];
export const MAX_FILE_SIZE = 250 * 1024 * 1024; // 250MB

export const DURATION_UNITS = ["Days", "Weeks", "Months", "Years"];
export const CURRENCIES = [
  "USD",
  "EUR",
  "MYR",
  "THB",
  "VND",
  "IDR",
  "SGD",
  "JPY",
];
