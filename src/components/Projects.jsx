"use client"

import { useState } from "react"
import bookTwonImg from '../assets/images/booktown.png'
import FyloImg from '../assets/images/Fylo.png'
import InsightlyImg from '../assets/images/Insightly.png'
import CleanBlogImg from '../assets/images/cleanBlog.png'
export default function Projects() {
  // Project data array
  const [projects, setProjects] = useState([
    {
      id: 1,
      category: "eBook Store",
      title: "BookTown",
      description:
        "BookTown is an online eBook store where users can browse a wide variety of eBooks and enjoy a seamless experience with secure login and signup options. It's designed to provide easy navigation and access to your favorite digital books.",
      technologies: ["HTML", "CSS", "Bootstrap" , "PHP", "JavaScript"],
      liveLink: "http://bookone.great-site.net/?i=1",
      codeLink: "#",
      image: bookTwonImg ,
      status: "completed",
    },
    {
      id: 2,
      category: "Social Media Dashboard",
      title: "Insightly",
      description:
        "Insightly is a powerful social media dashboard that lets users track engagement, growth trends, and performance across multiple platforms. With real-time updates and detailed analytics, it provides a comprehensive overview of your social media presence.",
      technologies: ["HTML", "CSS", "JavaScript", "React","Bootstrap" , "Node.js"],
      liveLink: "#",
      codeLink: "https://github.com/Ma7mdgalal/react-dashboard-depi",
      image: InsightlyImg,
      status: "In Progress",
    },
    {
      id: 3,
      category: "Landing Page",
      title: "Fylo",
      description:
        'Fylo Landing Page is a sleek, responsive website designed to showcase a service or product, featuring a clean layout and a clear call-to-action for users.',
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript" , "React"],
      liveLink: "https://fylo-landing-page-seven-phi.vercel.app/",
      codeLink: "https://github.com/Omar-Warlock/Fylo-Landing-Page",
      image: FyloImg,
      status: "completed",
    },
    {
      id: 4,
      category: "Blog",
      title: "Clean Blog",
      description:
        "The crawler crawls a website you pick and it will show you a table with all the links that brings to the website itself and it will count them.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      liveLink: "https://clean-blog-nr7n7k9bw-omar-warlocks-projects.vercel.app/",
      codeLink: "https://github.com/Omar-Warlock/Clean-blog",
      image: CleanBlogImg,
      status: "completed",
    },
  ])

  // Available technology filters
  const allTechnologies = ["HTML", "CSS", "JavaScript" , "Tailwind","React", "Bootstrap", "Node.js", "PHP"]

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All")

  // Filter projects based on selected technology
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.technologies.includes(activeFilter))

  return (
    <div className="py-5" id='projects'style={{ backgroundColor: "#0d3b49", color: "#f5e9d1" }}>
      <div className="container">
        <h2 className="display-4 mb-4 fw-bold text-center">Personal Projects</h2>

        <p className="text-center text-md-start mb-4">
          Welcome to my projects section! Here, you can find a collection of my latest web software development
          portfolio projects. My projects range from HTML and CSS to React and Node.js.
        </p>

        <p className="text-center text-md-start mb-4">
          Take a look below and filter the ones you're most interested, keep in mind that some of them are finished and
          fully functioning while others may miss javascript.
        </p>

        {/* Filter buttons */}
        <div className="mb-4 text-center text-md-start">
          <p className="mb-2">Select the filter you want:</p>
          <div className="d-flex flex-wrap justify-content-start gap-2">
            <button
              className={`btn btn-sm ${activeFilter === "All" ? "bg-accent" : "btn-outline-light"}`}
              onClick={() => setActiveFilter("All")}
            >
              Show All
            </button>

            {allTechnologies.map((tech, index) => (
              <button
                key={index}
                className={`btn btn-sm ${activeFilter === tech ? "bg-accent" : "btn-outline-light"}`}
                onClick={() => setActiveFilter(tech)}
                style={{
                  borderRadius: "4px",
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Projects list */}
        <div className="projects-list">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card mb-5">
              <div className="row g-0 align-items-center">
                <div className="col-md-6">
                  <div className="p-4">
                    <p className="text-light-emphasis mb-1">{project.category}</p>
                    <h3 className="fs-2 fw-bold mb-3">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>

                    {project.status === "completed" ? (
                      <div className="d-flex gap-2">
                        <a href={project.liveLink} style={{                  borderRadius: "4px",
                  fontFamily: "monospace",}} className="btn bg-accent px-3">
                          Live Website
                        </a>
                        <a href={project.codeLink} style={{                  borderRadius: "4px",
                  fontFamily: "monospace",}} className="btn btn-outline-light px-3">
                          Code
                        </a>
                      </div>
                    ) : (
                      <button className="btn btn-outline-light px-3" style={{borderRadius: "4px",
                        fontFamily: "monospace",}} disabled>
                        Coming soon
                      </button>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-5" >
                    {/* Empty image placeholder - user will add their own images */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} screenshot`}
                      className="img-fluid rounded shadow"
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
