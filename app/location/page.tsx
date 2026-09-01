import Link from "next/link";
import { PageHero } from "../components";
import { brand, images } from "../site-data";

export default function LocationPage() {
  return (
    <main>
      <PageHero title="Right Where You Need to Be." text="Global Comfort is positioned before the University of Ilorin Gate, along University Road, off Tanke Road." image={images.aerial} />
      <section className="page-content details-grid">
        <article>
          <p className="eyebrow">Address</p>
          <h2>{brand.address}</h2>
          <p>A practical location for guests visiting the University of Ilorin axis, Tanke Road area and surrounding parts of Ilorin.</p>
          <div className="status-row">
            <span>University of Ilorin axis</span>
            <span>Off Tanke Road</span>
            <span>Ilorin, Kwara</span>
          </div>
          <img className="location-photo" src={images.drive} alt="Global Comfort driveway and apartment exterior" />
        </article>
        <aside className="booking-panel">
          <h3>Need help finding us?</h3>
          <p>Chat with Global Comfort on WhatsApp for directions or reservation support.</p>
          <a href={brand.whatsappHref} className="submit-button">WhatsApp Us</a>
          <Link href="/availability" className="text-cta">Check Availability</Link>
        </aside>
      </section>
    </main>
  );
}
