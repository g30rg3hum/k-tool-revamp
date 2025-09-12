interface Props {
  htmlFor?: string;
  children: React.ReactNode;
}

export default function Label({ children, htmlFor }: Props) {
  return (
    <label className="text-xs font-semibold" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
