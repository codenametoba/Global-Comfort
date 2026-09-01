import Link from "next/link";
import { PageHero, PriceBlock } from "../components";
import { images, rooms } from "../site-data";

export default function ApartmentsPage() {
  return (
    <main>
      <PageHero title="Space for Every Kind of Stay." text="Choose from one, two and three bedroom serviced apartments near the University of Ilorin axis." image={images.hero} />
      <section className="page-content">
        <div className="apartment-editorial-list">
          {rooms.map((room) => (
            <article className="apartment-editorial" key={room.slug}>
              <div className="apartment-gallery-card">
                <img className="main" src={room.image} alt={`${room.name} at Global Comfort`} />
                <img src={images.loungeWide} alt="Global Comfort living area" />
                <img src={images.courtyard} alt="Global Comfort exterior" />
              </div>
              <div>
                <p className="eyebrow">{room.label}</p>
                <h2>{room.displayName}</h2>
                <p>{room.longDescription}</p>
                <dl className="room-meta">
                  <div><dt>Guests</dt><dd>{room.guests}</dd></div>
                  <div><dt>Beds</dt><dd>{room.bed}</dd></div>
                </dl>
                <PriceBlock naira={room.naira} usd={room.usd} />
                <div className="chip-row">{room.amenities.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="card-actions">
                  <Link href="/availability" className="mini-primary">Check Availability</Link>
                  <Link href={`/apartments/${room.slug}`} className="mini-secondary">View Details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
