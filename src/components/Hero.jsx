import "../styles/home.css";
import heroVideo from "../assets/HeroBanner.mp4";

function Hero() {
  return (
     <section id="home" className="home">   
       <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
       >
        <source src={heroVideo} type="video/mp4" />
       </video>

       <div className="hero-content">
        {/* <p>
          Creating stunning walls with artistic designs, custom paintings and timeless creativity.
        </p> */}

        {/* <div className="hero-buttons">
           <a href="#about" className="hero-btn">About Us</a>
           <a href="#contact" className="hero-btn">Contact Us</a>
        </div> */}
      </div>

    </section>
  );
}

export default Hero;