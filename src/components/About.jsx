import { useRef, useEffect } from "react";
import "../styles/about.css";
import artistVideo from "../assets/artStyle2/vid2.mp4";


function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // 50% visible na play
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">

      <h1 className="about-title">About Us</h1>

      <div className="about-card">

        <div className="about-left">
          {/* <img src={artistImg} alt="Artist" /> */}
          <video
           className="about-left-video"
            muted
            loop
            playsInline
            ref={videoRef}
          >
            <source src={artistVideo} type="video/mp4" />
          </video>
        </div>

        <div className="about-right">
          <h2>Creative Wall & Mandala Artist</h2>

          <p>
            We create beautiful hand-drawn wall art, mandala designs,
            custom decorative paintings and creative artworks for homes,
            shops and offices.
          </p>

          <p>
            With passion and attention to detail, every design is crafted
            to transform plain spaces into inspiring environments.
          </p>

          <div className="about-points">
            <span>✔ Custom Designs</span>
            <span>✔ Home & Shop Works</span>
            <span>✔ Unique Handcrafted Art</span>
            <span>✔ Quality Finish</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;