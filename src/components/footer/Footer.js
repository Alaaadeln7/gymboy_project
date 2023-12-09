import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <h1>GYMBOY.</h1>
          <p>
            GYMBOY is a online gym, also known as a virtual gym or an e-gym, is
            a platform that provides fitness
          </p>
          <span> &copy; 2023 copy right Gym Boy</span>
        </div>
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Social media</a>
            </li>
            <li>
              <a href="/#">Shopping</a>
            </li>
            <li>
              <a href="/#">Join Partner</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h3>company</h3>
          <ul>
            <li>
              <a href="/#">Terms & Conditions</a>
            </li>
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="touch">
          <h3>Go To Touch</h3>
          <ul>
            <li>
              <a href="/#">Egypt , Cairo</a>
            </li>
            <li>
              <a href="/#">+123-456-789</a>
            </li>
            <li>
              <a href="/#">example@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
