import myImage from "../assets/myimage.jpg";
function Landing() {
  const dots = [
    { size: 10, top: "15%", left: "10%" },
    { size: 10, top: "25%", right: "15%" },
    { size: 8, bottom: "20%", left: "5%" },
    { size: 8, top: "10%", right: "30%" },
    { size: 6, bottom: "30%", left: "20%" },
    { size: 6, top: "40%", right: "5%" },
  ];

  return (
    <div
      className="landing py-5 px-5 d-flex align-items-center position-relative overflow-hidden"
      id="home"
      style={{ minHeight: "100vh" }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="py-4">
              <h1 className="display-3 landing-heading">
                Hi, I'm <br />
                Omar <br />
                Mahmoud!
              </h1>
              <p className="landing-text">I'm a Front-end Developer.</p>
              <a
                href="https://www.canva.com/design/DAGdZGGPAI8/HYU_Y2-n96-yyqUiCyipBQ/view?utm_content=DAGdZGGPAI8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha475d1ace5"
                target="_blank"
                className="btn btn-lg px-4 py-2 bg-accent fs-4"
                style={{
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="rounded-circle overflow-hidden d-inline-block"
              style={{
                borderColor: "#ead7bb",
                borderWidth:"10px",
                borderStyle: "solid",
                maxHeight: "600px",
                maxWidth: "600px",
                minHeight: "200px",
                minWidth: "300px",
              }}
            >
              <img
                src={myImage}
                alt="My-Photo"
                className="img-fluid"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      {dots.map((dot, i) => (
        <span
          key={i}
          className="decorative-dot"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            ...dot,
          }}
        ></span>
      ))}
    </div>
  );
}

export default Landing;
