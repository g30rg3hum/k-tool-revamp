import clsx from "clsx";
import Error from "./error";
import Label from "./label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  number?: boolean;
  contactNumber?: boolean;
}
// Variable input type
export default function Input({
  label,
  placeholder,
  error,
  type = "text",
  number,
  contactNumber,
  ...rest
}: Props) {
  return (
    <div className="w-full">
      <Label htmlFor={label}>{label}</Label>
      <input
        type={type}
        className={clsx(
          "w-full text-sm border border-black/40 rounded-md focus:outline-none focus:ring-3 focus:ring-primary transition duration-300",
          type !== "file"
            ? "p-3"
            : "py-0 pr-3 file:-ml-px file:px-4 file:mr-3 file:py-3 file:bg-neutral file:border-0 file:rounded-l-md file:cursor-pointer file:border-r file:border-black/40"
        )}
        placeholder={placeholder ?? "Enter value here..."}
        {...rest}
        onKeyDown={
          number || contactNumber
            ? (e) => {
                const generalKeysCheck = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                ].includes(e.key);

                if (number && !/[0-9,\.]/.test(e.key) && !generalKeysCheck) {
                  e.preventDefault();
                }

                if (
                  contactNumber &&
                  !/[0-9+\-\s()]/.test(e.key) &&
                  !generalKeysCheck
                ) {
                  e.preventDefault();
                }
              }
            : undefined
        }
      />
      {error && (
        <div className="mt-1">
          <Error>{error}</Error>
        </div>
      )}
    </div>
  );
}
