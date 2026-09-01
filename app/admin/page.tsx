import { PageHero } from "../components";
import { images } from "../site-data";

const modules = ["Reservations", "Room inventory", "Payments", "Revenue reports", "Occupancy reports", "Housekeeping", "Guest database", "CMS content", "Emails", "Staff roles"];

export default function AdminPage() {
  return (
    <main>
      <PageHero title="Administrative Dashboard" text="A management cockpit for reservations, apartment inventory, payments, content, reporting and permissions." image={images.aerial} />
      <section className="page-content">
        <div className="ops-grid">
          <article className="ops-card"><strong>68%</strong><h3>Occupancy</h3><p>Management can monitor how apartments are performing.</p></article>
          <article className="ops-card"><strong>₦</strong><h3>Revenue</h3><p>Payments, balances and receipts stay organized by reservation.</p></article>
          <article className="ops-card"><strong>Roles</strong><h3>Permissions</h3><p>Staff access can be separated by responsibility.</p></article>
        </div>
        <div className="system-grid">{modules.map((item) => <p key={item}>{item}</p>)}</div>
      </section>
    </main>
  );
}
