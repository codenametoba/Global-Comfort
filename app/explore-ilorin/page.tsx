import { PageHero } from "../components";
import { images } from "../site-data";

const categories = ["Attractions", "Dining", "Shopping", "Business", "Events", "Transportation"];

export default function ExploreIlorinPage() {
  return (
    <main>
      <PageHero title="Explore Ilorin" text="Make the most of your stay near the University of Ilorin axis with useful guest guidance." image={images.aerial} />
      <section className="page-content ops-grid">
        {categories.map((item) => <article className="ops-card" key={item}><h3>{item}</h3><p>Helpful recommendations around Ilorin can be added here as they are confirmed.</p></article>)}
      </section>
    </main>
  );
}
