import htmlIcon from "../assets/icons/htmlicon.png";
import CSS from '../assets/icons/css.png'
import JS from '../assets/icons/javascript.png'
import NEXT from '../assets/icons/next.png'
import REACT from '../assets/icons/react.png'
import VSCODE from '../assets/icons/visual-studio-code.png'
import TAILWIND from '../assets/icons/tailwind.png'
import GITHUB from '../assets/icons/github.png'
import GIT from '../assets/icons/git.png'

export default function About() {
    // Skills data array with paths to icon images
    const skills = [
      { name: "HTML", iconPath: htmlIcon},
      { name: "CSS", iconPath: CSS},
      { name: "JS", iconPath: JS},
      { name: "REACT", iconPath: REACT},
      { name: "NEXT", iconPath: NEXT},
      { name: "TAILWIND", iconPath: TAILWIND},
      { name: "VSCODE", iconPath: VSCODE},
      { name: "GITHUB", iconPath: GITHUB},
      { name: "GIT", iconPath: GIT},
    ]
  
    return (
      <div className="py-5" style={{ backgroundColor: "#f5e9d1"  , color: "#0d3b49" }} id='about'>
        <div className="container">
          <div className="row justify-content-between">
            {/* About Me Text Section */}
            <div className="col-md-5 text-center  ">
              <h2 className="display-4 mb-4 fw-bold" >
                About me
              </h2>
  
              <p className="mb-3 text-center  ">
                As a Front-End Developer, I am passionate about creating visually stunning and user-friendly web
                applications that solve problems.
              </p>
  
              <p className="mb-4 text-center ">
                Before this, I had a little side hustle where I was selling books online, and created no-code websites &
                ads online, and on my last project I tried to self-start a tech start-up.
              </p>
  
              <p className="mb-4 text-center ">
                This background has helped me develop a strong foundation in business and technology, which I leverage to
                deliver solutions that exceed client expectations.
              </p>
  
              <p className="mb-5 text-center ">
                I am always eager to learn new skills and technologies to stay ahead of the curve!
              </p>
  
              <a
                className="btn btn-lg px-4 py-2 mb-4"
                href="https://www.canva.com/design/DAGdZGGPAI8/HYU_Y2-n96-yyqUiCyipBQ/view?utm_content=DAGdZGGPAI8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha475d1ace5"
                target="_blank"
                style={{
                  backgroundColor: "#0d3b49",
                  color: "#f5e9d1",
                  border: "none",
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                View Resume
              </a>
            </div>
  
            {/* Skills Section */}
            <div className="col-md-5" style={{ color: "#0d3b49" }}>
              <h2 className="display-4 mb-4 fw-bold text-center" >
                Skill
              </h2>
  
              <div className="row g-4 justify-content-center justify-content-md-start">
                {skills.map((skill, index) => (
                  <div key={index} className="col-4 col-sm-4 text-center">
                    <div
                      className="p-2 rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: "90px",
                        height: "90px",
                      }}
                    >
                      <img
                        src={skill.iconPath || "/placeholder.svg"}
                        alt={`${skill.name} icon`}
                        className="img-fluid"
 
                      />
                    </div>
                    <p className="mt-2 mb-0">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  