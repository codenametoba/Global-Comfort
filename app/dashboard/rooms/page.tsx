import { ApartmentCodeTable, PageHero } from "../../components";
import { images, rooms } from "../../site-data";

export default function DashboardRoomsPage() {
  return (
    <main>
      <PageHero title="Room Inventory" text="Internal view for apartment codes, categories and room-status management." image={images.drive} />
      <section className="page-content">
        <div className="ops-grid">
          {rooms.map((room) => (
            <article className="ops-card" key={room.slug}>
              <h3>{room.name}</h3>
              <strong>{room.units.length}</strong>
              <p>{room.units.join(", ")} · {room.price}</p>
            </article>
          ))}
        </div>
        <ApartmentCodeTable />
      </section>
    </main>
  );
}
