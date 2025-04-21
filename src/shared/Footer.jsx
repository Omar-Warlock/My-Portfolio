import linkedInImg from "../assets/Icons/linkedin.png";
import githubImg from "../assets/Icons/github.png";
function Footer() {
  return (
    <div className="container text-center py-3">
      <h4 className="fw-bold">Let's get social</h4>
      <div className="mb-2">
        <a
          href="https://www.linkedin.com/in/omar-mahmmoud-/"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3  fs-1"
        >
          <img src={linkedInImg} alt="" style={{ width: "40px" }} />
        </a>
        <a
          href="https://github.com/Omar-Warlock"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark fs-1"
        >
          <img src={githubImg} alt="" style={{ width: "40px" }} />
        </a>
      </div>
      <p>Copyright &copy; 2025 Omar Mahmoud</p>
    </div>
  );
}

export default Footer;
