interface Props {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    message: string;
}
export function GeneralInquiry({
    firstName,
    lastName,
    email,
    contactNumber,
    message,
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
                <strong>Contact Number:</strong> {contactNumber}
            </p>
            <br />
            <p>
                <strong>Message:</strong> {message}
            </p>
        </div>
    );
}
