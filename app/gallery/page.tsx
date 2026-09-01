import { PageHero } from "../components";
import { images } from "../site-data";
import { GalleryClient } from "./GalleryClient";

export default function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" text="Explore the exterior, interiors, living spaces and apartment details at Global Comfort." image={images.hero} />
      <section className="page-content">
        <GalleryClient />
      </section>
    </main>
  );
}
