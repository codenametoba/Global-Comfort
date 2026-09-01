import Link from "next/link";
import { PageHero } from "../components";
import { images, stayReasons } from "../site-data";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="Comfort Made for the Way You Stay." text="Global Comfort provides thoughtfully furnished private apartments for guests seeking space, privacy and a comfortable base in Ilorin." image={images.courtyard} />
      <section className="page-content">
        <div className="editorial-grid about-intro">
          <img className="tall-photo" src={images.loungeWide} alt="Global Comfort furnished living space" />
          <div className="editorial-copy">
            <p className="eyebrow">Our Approach</p>
            <h2>More Than Somewhere to Sleep.</h2>
            <p>Whether your stay brings you to Ilorin for business, family, university, an event or simply time away, Global Comfort is designed to make settling in feel effortless.</p>
          </div>
          <img src={images.bedroom} alt="Global Comfort bedroom" />
        </div>

        <section className="signature-panel about-panel">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2>Comfort Without Complication.</h2>
          </div>
          <p>From spacious private accommodation to straightforward booking and attentive hospitality, every part of the experience is designed around making guests feel at ease.</p>
        </section>

        <section className="section-inset">
          <div className="section-heading">
            <p className="eyebrow">Who We Welcome</p>
            <h2>Designed for Different Ways to Stay.</h2>
          </div>
          <div className="stay-grid">
            {stayReasons.slice(0, 4).map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-band about-location">
          <img src={images.aerial} alt="Aerial view near Global Comfort" />
          <div>
            <p className="eyebrow">Location</p>
            <h2>A Comfortable Base in Ilorin.</h2>
            <p>Global Comfort is positioned along the University of Ilorin axis, giving guests a practical place to arrive, rest and move around the city with confidence.</p>
            <Link href="/location" className="book-button light">Explore Our Location</Link>
          </div>
        </section>

        <section className="final-cream-cta">
          <p className="eyebrow">Global Comfort · Ilorin</p>
          <h2>Make Global Comfort Your Place in Ilorin.</h2>
          <Link href="/availability" className="book-button">Check Availability</Link>
        </section>
      </section>
    </main>
  );
}
