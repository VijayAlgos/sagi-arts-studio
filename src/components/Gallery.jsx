import { useState } from "react";
import "../styles/gallery.css";

import img1 from "../assets/artStyle1/img1.png";
import img2 from "../assets/artStyle1/img2.png";
import img3 from "../assets/artStyle1/img3.png";
import img4 from "../assets/artStyle1/img4.png";
import img5 from "../assets/artStyle1/img5.png";
import img6 from "../assets/artStyle1/img6.png";
import img7 from "../assets/artStyle1/img7.png";
import img8 from "../assets/artStyle1/img8.png";
import img9 from "../assets/artStyle1/img9.png";
import img10 from "../assets/artStyle1/img10.png";
import img11 from "../assets/artStyle1/img11.png";
import img12 from "../assets/artStyle1/img12.png";

import vid1 from "../assets/artStyle2/vid1.mp4";
import vid2 from "../assets/artStyle2/vid2.mp4";
import thumbnail from "../assets/artStyle2/thumbnail.png";


import art1 from "../assets/artStyle3/art1.jpg";
import art2 from "../assets/artStyle3/art2.jpg";
import art3 from "../assets/artStyle3/art3.jpg";
import art4 from "../assets/artStyle3/art4.jpg";
import art5 from "../assets/artStyle3/art5.jpg";
import art6 from "../assets/artStyle3/art6.jpg";
import art7 from "../assets/artStyle3/art7.jpg";


function Gallery() {
  const [selected, setSelected] = useState(null);

  const categories = [
    {
      title: "Mandala Arts",
      subTitle: "Fashion Design Art Portfolio | Hand Drawn Illustrations & Textile Pattern Concepts",
      description:"Explore a creative fashion design portfolio featuring hand-drawn illustrations, mandala artwork, botanical sketches, textile pattern concepts, and surface design inspiration for fashion projects.",
      cover: img1,
      items: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    },
    {
      title: "Mandala Creations",
      subTitle: "Experience the transformation of ideas into detailed symmetrical art.",
      description:"Immerse yourself in the journey of mandala art, where every movement and stroke carefully builds upon the last. The process blends balance, focus, and creativity into a beautiful final result.",
      cover: thumbnail,
      items: [vid1, vid2]
    },
    {
      title: "Fashion Art",
      subTitle: "Fashion Design Portfolio: Tradition, Modern Style & Cultural Elegance",
      description:"Explore a creative fashion design portfolio featuring hand-drawn illustrations of bridal wear, ethnic fashion, modern outfits, resort wear, folk costumes, winter style, and traditional cultural attire.",
      cover: art3,
      items: [art1, art2, art3, art4, art5, art6, art7]
    }
  ];

  return (
    <section id="gallery" className="gallery-section">

      <h1 className="section-title">My Gallery</h1>

      <div className="gallery-grid">

        {categories.map((cat, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setSelected(cat)}
          >
            <img src={cat.cover} alt={cat.title} loading="lazy" />
            <h3>{cat.title}</h3>
            <h6>{cat.subTitle}</h6>
            <p>{cat.description}</p>
          </div>
        ))}

      </div>

      {selected && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>

          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2>{selected.title}</h2>

            <div className="popup-grid">
                {selected.items.map((item, i) => (
                    item.endsWith(".mp4") ? (
                    <video
                        key={i}
                        muted
                        playsInline
                        preload="metadata"
                        className="popup-media no-controls"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                        }}
                    >
                        <source src={item} type="video/mp4" />
                    </video>
                    ) : (
                    <img
                        key={i}
                        src={item}
                        alt="art"
                        loading="lazy" 
                        className="popup-media"
                    />
                    )
                ))}
            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Gallery;