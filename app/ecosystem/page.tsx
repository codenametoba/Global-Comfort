import { PageHero } from "../components";
import { architecture, images } from "../site-data";

const modules = ["Public website", "Availability search", "Online booking", "Front desk", "Walk-ins", "Payments", "Housekeeping", "Guest database", "Revenue reports", "CMS", "Staff roles", "Emails"];

export default function EcosystemPage() {
  return (
    <main>
      <PageHero title="Hotel Management Ecosystem" text="A connected operating model for bookings, reception, payments, housekeeping and reporting." image={images.drive} />
      <section className="page-content">
        <div className="system-grid">{architecture.map((item) => <p key={item}>{item}</p>)}</div>
        <div className="ops-grid">
          {modules.map((module) => <article className="ops-card" key={module}><h3>{module}</h3><p>Designed to work from one reliable operating record.</p></article>)}
        </div>
      </section>
    </main>
  );
}
