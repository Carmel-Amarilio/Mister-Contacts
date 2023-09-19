const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./views/Home.jsx";
import { Teams } from "./views/Teams.jsx";
import { Contacts } from "./views/Contacts.jsx";

export function App() {
  return (
    <Router>
      <section className="app">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </section>
    </Router>
  );
}
