const { Link, NavLink } = ReactRouterDOM;

export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <h3>Team Contact!</h3>
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
}
