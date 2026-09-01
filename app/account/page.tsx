import { PageHero } from "../components";
import { images } from "../site-data";

export default function AccountPage() {
  return (
    <main>
      <PageHero title="Guest Account" text="Optional account features for returning guests after the no-account booking flow." image={images.bedroom} />
      <section className="page-content ops-grid">
        {["Upcoming stays", "Past stays", "Cancelled stays", "Receipts", "Personal information", "Saved guests"].map((item) => (
          <article className="ops-card" key={item}><h3>{item}</h3><p>Prototype panel for authenticated guests.</p></article>
        ))}
      </section>
    </main>
  );
}
