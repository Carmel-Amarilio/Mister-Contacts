const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;
const { Provider } = ReactRedux

import { AppHeader } from "./cmps/AppHeader.jsx";
import { Home } from "./views/Home.jsx";
import { Teams } from "./views/Teams.jsx";
import { Contacts } from "./views/Contacts.jsx";
import { ContactsDetails } from "./views/ContactsDetails.jsx";

import { store } from './store/store.js'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="app">
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contacts/:contactId" element={<ContactsDetails />} />
          </Routes>
        </section>
      </Router>
    </Provider>
  );
}
