import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Home/Home.jsx";
import { About } from "./About/About.jsx";
import { Services } from "./Services/Services.jsx";
import { Contact } from "./Contact/Contact.jsx";
import { ContactFeedback } from "./Contact/ContactFeedback/ContactFeedback.jsx";
import { Error } from "./Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "feedback", element: <ContactFeedback /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
