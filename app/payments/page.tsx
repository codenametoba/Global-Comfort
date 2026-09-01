import { PageHero } from "../components";
import { images, rooms } from "../site-data";

export default function PaymentsPage() {
  return (
    <main>
      <PageHero title="SIMPLE, CLEAR PRICING." text="Nightly apartment rates are shown with Naira as the primary price and USD equivalents where applicable." image={images.mediaWall} />
      <section className="page-content">
        <div className="rate-grid">
          {rooms.map((room) => (
            <article className="rate-card" key={room.slug}>
              <h3>{room.name}</h3>
              <strong>{room.naira}</strong>
              <p>{room.usd} for guests paying in US Dollars.</p>
            </article>
          ))}
        </div>
        <div className="ops-grid">
          <article className="ops-card"><h3>Online Payment</h3><p>Secure online payments are available during booking.</p></article>
          <article className="ops-card"><h3>Bank Transfer</h3><p>Transfer instructions can be provided when this option is available.</p></article>
          <article className="ops-card"><h3>Booking Policy</h3><p>Cancellation and deposit rules can be confirmed with Global Comfort before payment.</p></article>
        </div>
      </section>
    </main>
  );
}
