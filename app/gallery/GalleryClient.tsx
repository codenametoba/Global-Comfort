"use client";

import { useState } from "react";
import { gallery } from "../site-data";

const categories = ["All", "Apartments", "Interiors", "Exterior", "Property", "Details"];

export function GalleryClient() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const items = active === "All" ? gallery : gallery.filter(([category]) => category === active);

  return (
    <>
      <div className="filters">
        {categories.map((category) => (
          <button className="book-button" type="button" key={category} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {items.map(([category, image]) => (
          <button key={`${category}-${image}`} type="button" onClick={() => setSelected(image)}>
            <img src={image} alt={`${category} at Global Comfort`} />
          </button>
        ))}
      </div>
      {selected ? (
        <button className="lightbox" type="button" onClick={() => setSelected(null)} aria-label="Close gallery image">
          <img src={selected} alt="Selected Global Comfort gallery view" />
        </button>
      ) : null}
    </>
  );
}
