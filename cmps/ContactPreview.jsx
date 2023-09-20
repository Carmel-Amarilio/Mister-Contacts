const { useNavigate } = ReactRouterDOM;

export function ContactPreview({ contact, onRemove }) {
  const navigate = useNavigate();

  const { id, firstName, lastName, phone, email } = contact;
  return (
    <div onClick={() => navigate(`/contacts/${id}`)}>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
      <p>{phone}</p>
      <button
        className="contact-btn"
        onClick={(ev) => {
          ev.stopPropagation();
          onRemove(id);
        }}
      >
        <img
          src="assets/img/delete_FILL0_wght400_GRAD0_opsz24 (1).png"
          alt="add contact"
        />
      </button>
    </div>
  );
}
