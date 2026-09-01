import { PageHero } from "../components";
import { images, rooms } from "../site-data";

export default function FrontDeskPage() {
  return (
    <main>
      <PageHero title="Front Desk and Walk-In System" text="Reception bookings write to the same reservation inventory used by the public booking engine." image={images.drive} />
      <section className="page-content">
        <div className="ops-grid">
          <article className="ops-card"><strong>12</strong><h3>Available Tonight</h3><p>Live availability will update as bookings are added.</p></article>
          <article className="ops-card"><strong>7</strong><h3>Expected Arrivals</h3><p>Realtime check-in queue for reception.</p></article>
          <article className="ops-card"><strong>3</strong><h3>Housekeeping Holds</h3><p>Room status blocks prevent accidental sale.</p></article>
        </div>
        <div className="table-card">
          <table>
            <thead><tr><th>Room</th><th>Status</th><th>Dates</th><th>Channel</th><th>Action</th></tr></thead>
            <tbody>
              {rooms.map((room, index) => <tr key={room.slug}><td>{200 + index}</td><td>{index === 1 ? "Occupied" : "Available"}</td><td>Editable date range</td><td>{index === 0 ? "Online" : "Front desk"}</td><td>Check / assign</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
