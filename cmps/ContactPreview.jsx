export function ContactPreview({ contact }) {
  return (
    <div>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <p>{contact.mail}</p>
      <p>{contact.phone}</p>
    </div>
  );
}
