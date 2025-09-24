import Error from "./error";
import Label from "./label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: string;
}
export default function TextInput({
  label,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <div className="w-full">
      <Label htmlFor={label}>{label}</Label>
      <input
        type="text"
        className="w-full p-3 text-sm border border-black/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
        placeholder={placeholder ?? "Enter text here..."}
        {...rest}
      />
      {error && (
        <div className="mt-1">
          <Error>{error}</Error>
        </div>
      )}
    </div>
  );
}
