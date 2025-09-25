import Error from "./error";
import Label from "./label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  number?: boolean;
}
// Variable input type
export default function Input({
  label,
  placeholder,
  error,
  type = "text",
  number,
  ...rest
}: Props) {
  return (
    <div className="w-full">
      <Label htmlFor={label}>{label}</Label>
      <input
        type={type}
        className="w-full p-3 text-sm border border-black/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
        placeholder={placeholder ?? "Enter value here..."}
        {...rest}
        onKeyDown={
          number
            ? (e) => {
                if (
                  !/[0-9,\.]/.test(e.key) &&
                  !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(
                    e.key
                  )
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
