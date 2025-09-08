import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="link">
        <Link target="_blank" to="https://studio-code-eta.vercel.app/">
          <p style={{ fontSize: "12px" }}>DESIGNED BY studioCode</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
