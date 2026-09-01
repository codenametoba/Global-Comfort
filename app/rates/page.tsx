import { PageHero } from "../components";
import { images, rooms } from "../site-data";

export default function RatesPage() {
  return (
    <main>
      <PageHero title="SIMPLE, CLEAR PRICING." text="Nightly apartment rates are shown with Naira as the primary price and USD equivalents where applicable." image={images.mediaWall} />
      <section className="page-content">
        <div className="rate-comparison">
          {rooms.map((room) => (
            <article key={room.slug}>
              <h3>{room.displayName}</h3>
              <strong>{room.naira}</strong>
              <span>{room.usd} per night where applicable</span>
              <p>{room.guests} · {room.bed}</p>
            </article>
          ))}
        </div>
        <div className="ops-grid">
          <article className="ops-card"><h3>Online Payment</h3><p>Secure online payments are available during booking.</p></article>
          <article className="ops-card"><h3>Bank Transfer</h3><p>Transfer instructions can be provided when this option is enabled by management.</p></article>
          <article className="ops-card"><h3>Booking Policy</h3><p>Cancellation and deposit rules can be confirmed with the Global Comfort team.</p></article>
        </div>
      </section>
    </main>
  );
}
