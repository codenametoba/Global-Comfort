import Link from "next/link";
import { BookingSearch, PageHero, RoomCard } from "../components";
import { images, rooms } from "../site-data";

export default function AvailabilityPage() {
  return (
    <main>
      <PageHero title="Find Your Apartment" text="Choose your dates and see suitable Global Comfort apartment categories for your stay." image={images.hero} />
      <section className="page-content">
        <BookingSearch compact />
        <p className="note">Availability is shown by apartment category. Final confirmation happens during booking.</p>
        <div className="room-grid">
          {rooms.map((room) => <RoomCard key={room.slug} room={room} />)}
        </div>
        <Link href="/booking" className="book-button">Select Room</Link>
      </section>
    </main>
  );
}
