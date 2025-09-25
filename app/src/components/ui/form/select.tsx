import Error from "./error";
import Label from "./label";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export default function Select({ label, error, options, ...rest }: Props) {
  return (
    <div className="w-full">
      <Label htmlFor={label}>{label}</Label>
      <select
        className="w-full p-3 text-sm border border-black/40 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <div className="mt-1">
          <Error>{error}</Error>
        </div>
      )}
    </div>
  );
}
