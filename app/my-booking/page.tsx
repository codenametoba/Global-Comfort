import { PageHero } from "../components";
import { images } from "../site-data";

export default function MyBookingPage() {
  return (
    <main>
      <PageHero compact title="Manage Your Stay" text="Enter your booking reference and contact detail to find your upcoming stay." image={images.mediaWall} />
      <section className="page-content details-grid">
        <form className="retrieve-form">
          <label>Booking reference<input placeholder="GC-XXXXXXXX" /></label>
          <label>Email or phone<input placeholder="Booking contact detail" /></label>
          <button className="submit-button" type="button">Find My Booking</button>
        </form>
        <aside className="booking-panel">
          <h3>Your Stay Details</h3>
          <p>View upcoming stays, past stays, payments and receipts when your booking is found.</p>
        </aside>
      </section>
    </main>
  );
}
