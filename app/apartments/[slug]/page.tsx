import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingSearch, PageHero, PriceBlock, RoomCard } from "../../components";
import { images, rooms } from "../../site-data";

export default async function ApartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const apartment = rooms.find((room) => room.slug === slug);
  if (!apartment) notFound();
  const similar = rooms.filter((room) => room.slug !== apartment.slug).slice(0, 2);

  return (
    <main>
      <PageHero title={apartment.displayName} text={apartment.description} image={apartment.image} />
      <section className="page-content details-grid">
        <article>
          <p className="eyebrow">Stays / {apartment.displayName}</p>
          <h2>About This Stay</h2>
          <dl className="room-meta detail-meta">
            <div><dt>Guests</dt><dd>{apartment.guests}</dd></div>
            <div><dt>Beds</dt><dd>{apartment.bed}</dd></div>
            <div><dt>Rate from</dt><dd>{apartment.naira} / night</dd></div>
          </dl>
          <PriceBlock naira={apartment.naira} usd={apartment.usd} />
          <p>{apartment.longDescription}</p>
          <h3>Amenities</h3>
          <div className="amenity-list">{apartment.amenities.map((item) => <span key={item}>{item}</span>)}</div>
          <h3>Gallery</h3>
          <div className="detail-gallery">
            {[apartment.image, images.loungeWide, images.mediaWall, images.courtyard].map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt={`${apartment.name} view`} />
            ))}
          </div>
          <h3>Similar Apartments</h3>
          <div className="room-grid">{similar.map((room) => <RoomCard key={room.slug} room={room} />)}</div>
        </article>
        <aside className="booking-panel">
          <h3>Book This Apartment</h3>
          <BookingSearch compact />
          <div className="price-row"><span>Rate</span><strong>{apartment.naira} / night</strong></div>
          <div className="price-row"><span>USD fixed rate</span><strong>{apartment.usd} / night</strong></div>
          <div className="price-row"><span>Estimated total</span><strong>Shown during booking</strong></div>
          <Link href="/availability" className="submit-button">Check Availability</Link>
        </aside>
      </section>
      <div className="mobile-booking-bar">
        <span>From {apartment.naira}/night</span>
        <Link href="/availability">Check Availability</Link>
      </div>
    </main>
  );
}
