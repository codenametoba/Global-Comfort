import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingSearch, PageHero, PlaceholderNote, RoomCard } from "../../components";
import { rooms } from "../../site-data";

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  if (!room) notFound();
  const related = rooms.filter((item) => item.slug !== room.slug).slice(0, 2);

  return (
    <main>
      <PageHero title={room.name} text={room.description} image={room.image} />
      <section className="page-content details-grid">
        <article>
          <PlaceholderNote />
          <div className="photo-strip">
            {[room.image, ...related.map((item) => item.image), room.image].map((image, index) => (
              <img key={`${image}-${index}`} src={image} alt={`${room.name} gallery view`} />
            ))}
          </div>
          <h2>{room.name}</h2>
          <p>{room.longDescription}</p>
          <dl className="room-meta">
            <div><dt>Price</dt><dd>{room.price}</dd></div>
            <div><dt>Capacity</dt><dd>{room.guests}</dd></div>
            <div><dt>Beds</dt><dd>{room.bed}</dd></div>
            <div><dt>Size</dt><dd>{room.size}</dd></div>
            <div><dt>Availability</dt><dd>Database checked later</dd></div>
          </dl>
          <h3>Amenities</h3>
          <div className="chip-row">{room.amenities.map((item) => <span key={item}>{item}</span>)}</div>
          <h3>Room Policies</h3>
          <p>Editable check-in, check-out, cancellation, occupancy and payment policies should be confirmed by Global Comfort management before launch.</p>
          <h3>Related Rooms</h3>
          <div className="room-grid">{related.map((item) => <RoomCard key={item.slug} room={item} />)}</div>
        </article>
        <aside className="booking-panel">
          <h3>Check Availability</h3>
          <BookingSearch compact />
          <div className="price-row"><span>Nightly rate</span><strong>{room.price}</strong></div>
          <div className="price-row"><span>Nights</span><strong>Calculated later</strong></div>
          <div className="price-row"><span>Taxes/fees</span><strong>Configurable</strong></div>
          <div className="price-row"><span>Total</span><strong>Shown during booking</strong></div>
          <Link href="/booking" className="submit-button">Check Availability</Link>
        </aside>
      </section>
    </main>
  );
}
