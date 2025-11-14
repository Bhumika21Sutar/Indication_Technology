import { useNavigate } from "react-router-dom";
import ContactModal from "../pages/ContactModal";

const ContactModalPage = () => {
  const navigate = useNavigate();

  return <ContactModal isOpen={true} onClose={() => navigate(-1)} />;
};

export default ContactModalPage;
