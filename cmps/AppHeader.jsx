const { Link, NavLink } = ReactRouterDOM;

export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <h3>Team Contact!</h3>
      </Link>
      <nav>
        <button className="contact-btn">
          <NavLink to="/">
            <img
              src="assets/img/home_FILL0_wght400_GRAD0_opsz24.png"
              alt="home"
            />
          </NavLink>
        </button>
        <button className="contact-btn">
          <NavLink to="/contacts">
            <img
              src="assets/img/outline_contacts_black_24dp.png"
              alt="contacts"
            />
          </NavLink>
        </button>
      </nav>
    </header>
  );
}
