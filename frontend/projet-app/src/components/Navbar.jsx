import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const aboutnav = useNavigate();
  const homenav = useNavigate();
  const blognav = useNavigate();
  const contactnav = useNavigate();
  const about = () => {
    aboutnav("/about");
  };
  const home = () => {
    homenav("/");
  };
  const blog = () => {
    blognav("/blog");
  };
  const contact = () => {
    contactnav("/contact");
  };

  return (
    <div className="navbar-hero">
      <div className="navbar-container">
        <div className="aborder">
          <h1>
            <a onClick={home} href="">
              Home
            </a>
          </h1>
          <h1>
            <a onClick={blog} href="">
              Blog
            </a>
          </h1>
          <h1>
            <a onClick={about} href="">
              About
            </a>
          </h1>
          <h1>
            <a onClick={contact} href="">
              Contact
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
