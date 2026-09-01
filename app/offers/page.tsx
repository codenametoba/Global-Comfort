import { PageHero } from "../components";
import { images, offers } from "../site-data";

export default function OffersPage() {
  return (
    <main>
      <PageHero title="Special Offers" text="Seasonal packages and stay offers for guests visiting the University of Ilorin axis." image={images.drive} />
      <section className="page-content offer-grid">
        {offers.map((offer) => (
          <article key={offer.title}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p><strong>Promo code:</strong> {offer.code}</p>
            <a href="/availability">Book Offer</a>
          </article>
        ))}
      </section>
    </main>
  );
}
