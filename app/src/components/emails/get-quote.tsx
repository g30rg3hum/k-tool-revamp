interface Props {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  description: string;
  duration?: string;
  durationUnit?: string;
  budget?: string;
  currency?: string;
  // file is sent as attachment
}
export function GetQuote({
  firstName,
  lastName,
  email,
  contactNumber,
  description,
  duration,
  durationUnit,
  budget,
  currency,
}: Props) {
  return (
    <div>
      <p>
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Contact number:</strong> {contactNumber}
      </p>
      {duration && durationUnit && (
        <>
          <br />
          <p>
            <strong>Duration:</strong> {duration} {durationUnit}
          </p>
        </>
      )}
      {budget && currency && (
        <>
          <br />
          <p>
            <strong>Budget:</strong> {budget} {currency}
          </p>
        </>
      )}
      <br />
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
}
