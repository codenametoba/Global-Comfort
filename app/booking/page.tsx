import { PageHero } from "../components";
import { images } from "../site-data";

const steps = ["Choose dates", "Choose apartment", "Guest information", "Optional extras", "Payment option", "Confirmation"];

export default function BookingPage() {
  return (
    <main>
      <PageHero compact title="Book a Stay" text="Choose your dates, select an apartment and share the details needed to prepare for your arrival." image={images.mediaWall} />
      <section className="page-content details-grid">
        <article>
          <div className="booking-steps">{steps.map((step, index) => <span key={step}>Step {index + 1}: {step}</span>)}</div>
          <form className="form-grid">
            {["First name", "Last name", "Email", "Phone", "Country", "Address optional"].map((label) => (
              <label key={label}>{label}<input placeholder={label} /></label>
            ))}
            <label>Special requests<textarea placeholder="Optional guest requests" /></label>
            <label>Payment preference<select><option>Pay online</option><option>Bank transfer</option><option>Ask the hotel</option></select></label>
          </form>
        </article>
        <aside className="booking-panel">
          <h3>Booking Confirmation</h3>
          <p><strong>Confirmation Number:</strong> GC-XXXXXXXX</p>
          <p><strong>Guest:</strong> [Name]</p>
          <p><strong>Payment:</strong> To be confirmed</p>
          <div className="status-row"><span>View Booking</span><span>Get Directions</span><span>Contact Hotel</span></div>
        </aside>
      </section>
    </main>
  );
}
