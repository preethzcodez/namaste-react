import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Footer = () => {
  const { name } = useContext(UserContext);
  return (
    <footer className="footer">
      <div className="container p-4 text-white">© {name}</div>
    </footer>
  );
};

export default Footer;
