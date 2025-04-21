"use client"

import { useState, useEffect } from "react"

export default function Testimonials() {
  // Testimonials data array - 3 testimonials
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      quote:
        "Giuseppe is an exceptional front-end developer who delivered our project ahead of schedule. His attention to detail and ability to translate our ideas into a beautiful, functional website exceeded our expectations.",
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
    },
    {
      id: 2,
      quote:
        "Working with Giuseppe was a pleasure. He understood our requirements perfectly and implemented features that we hadn't even thought of. His technical skills and creativity make him stand out from other developers.",
      name: "Michael Chen",
      position: "CEO, StartupLaunch",
    },
    {
      id: 3,
      quote:
        "Giuseppe redesigned our e-commerce platform, resulting in a 40% increase in conversions. His knowledge of UX principles and modern web technologies transformed our outdated site into a sleek, user-friendly experience.",
      name: "Emma Rodriguez",
      position: "Product Manager, ShopEasy",
    },
  ])

  // State to track if Swiper is loaded
  const [swiperLoaded, setSwiperLoaded] = useState(false)

  // Initialize Swiper when component mounts
  useEffect(() => {
    // Import Swiper dynamically to avoid SSR issues
    const loadSwiper = async () => {
      try {
        // Load Swiper CSS
        const swiperCssLink = document.createElement("link")
        swiperCssLink.rel = "stylesheet"
        swiperCssLink.href = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        document.head.appendChild(swiperCssLink)

        // Load Swiper JS
        const swiperScript = document.createElement("script")
        swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
        swiperScript.async = true
        document.body.appendChild(swiperScript)

        // Initialize Swiper when script is loaded
        swiperScript.onload = () => {
          const Swiper = window.Swiper

          new Swiper(".testimonials-swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 1,
            loop: true,
            coverflowEffect: {
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // Navigation arrows removed as requested
          })

          setSwiperLoaded(true)
        }
      } catch (error) {
        console.error("Failed to load Swiper:", error)
      }
    }

    loadSwiper()

    // Cleanup function
    return () => {
      // Remove Swiper script and CSS if component unmounts
      const swiperScript = document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"]',
      )
      const swiperCss = document.querySelector(
        'link[href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"]',
      )

      if (swiperScript) swiperScript.remove()
      if (swiperCss) swiperCss.remove()
    }
  }, [])

  return (
    <div className="py-5" id='testimonials'style={{ backgroundColor: "#0d3b49", color: "#f5e9d1" }}>
      <div className="container">
        <h2 className="display-4 mb-5 fw-bold text-center" style={{ color: "#f5e9d1" }}>
          Client Testimonials
        </h2>

        {/* Custom CSS for Coverflow Swiper */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .testimonials-swiper {
              width: 100%;
              padding-top: 50px;
              padding-bottom: 70px;
            }
            
            .swiper-slide {
              background-position: center;
              background-size: cover;
              width: 300px;
              height: 300px;
              max-width: 90%;
            }
            
            @media (min-width: 768px) {
              .swiper-slide {
                width: 350px;
                height: 350px;
              }
            }
            
            .testimonial-card {
              width: 100%;
              height: 100%;
              background-color: #164b5c;
              border-radius: 8px;
              padding: 25px;
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              overflow: hidden;
            }
            
            .quote-text {
              font-style: italic;
              margin-bottom: 15px;
              font-size: 0.9rem;
              overflow-y: auto;
              max-height: 200px;
              color: #f5e9d1;
            }
            
            @media (min-width: 768px) {
              .quote-text {
                font-size: 1rem;
                max-height: 220px;
              }
            }
            
            .swiper-pagination {
              position: relative;
              margin-top: 20px;
            }
            
            .swiper-pagination-bullet {
              background: #f5e9d1 !important;
              opacity: 0.5;
            }
            
            .swiper-pagination-bullet-active {
              opacity: 1;
              background: #f5e9d1 !important;
            }
          `,
          }}
        />

        {/* Swiper container */}
        <div className="swiper testimonials-swiper">
          <div className="swiper-wrapper container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="testimonial-card">
                  <div className="quote-text">"{testimonial.quote}"</div>
                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: "#f5e9d1" }}>
                      {testimonial.name}
                    </h5>
                    <p style={{ color: "#a7c4cf" }}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots only - no navigation arrows */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  )
}
