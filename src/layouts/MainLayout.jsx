import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Map from "./main_component/Map";
import Footer from "./main_component/Footer";
import ContactForm from "./main_component/ContactForm";

export default function MainLayout() {
  const location = useLocation();
  const hideContact = ["/admission/process"].includes(location.pathname);

  return (
    <div>
      <Navbar />
      <Outlet />
      {!hideContact && <ContactForm />}
      <Map />
      <Footer />
    </div>
  );
}
