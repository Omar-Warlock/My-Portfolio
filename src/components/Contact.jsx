export default function Contact() {
    return (
      <div className="py-5" id='contact'style={{ backgroundColor: "#f5e9d1" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="display-4 mb-5 fw-bold" style={{ color: "#0d3b49" }}>
                Get in touch
              </h2>
  
              <p className="fs-5 mb-5" style={{ color: "#0d3b49" }}>
                If you wanna get in touch, talk to me about a project or just say hi. Send me an email at{" "}
                <a
                  href="mailto:omarwww363@gmail.com"
                  className="fw-bold"
                  style={{ color: "#0d3b49", textDecoration: "none" }}
                >
                  omarwww363@gmail.com
                </a>{" "}
                or click the button below ;)
              </p>
  
              <a
                href="mailto:omarwww363@gmail.com"
                className="btn btn-lg px-4 py-2"
                style={{
                  backgroundColor: "#0d3b49",
                  color: "#f5e9d1",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  