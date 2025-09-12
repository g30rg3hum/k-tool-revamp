interface Props {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
export function GeneralEnquiry({ firstName, lastName, email, message }: Props) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <br />
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
}
