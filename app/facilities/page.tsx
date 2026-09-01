import { PageHero } from "../components";
import { facilities, images } from "../site-data";

export default function FacilitiesPage() {
  return (
    <main>
      <PageHero title="Everything for an Easier Stay." text="Comfortable apartment layouts, furnished living areas and a calm property setting for your time in Ilorin." image={images.loungeWide} />
      <section className="page-content">
        <div className="facility-list">{facilities.map((item) => <article key={item.title}><img src={item.image} alt={item.title} /><div><h3>{item.title}</h3><p>{item.status}</p></div></article>)}</div>
      </section>
    </main>
  );
}
