import Link from "next/link";
import { apartmentNames, brand, navItems, rooms } from "./site-data";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Back to Global Comfort home">
        <strong>Global Comfort</strong>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <details className="mobile-menu">
          <summary aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/my-booking">My Booking</Link>
          </nav>
        </details>
        <Link href="/my-booking" className="ghost-link">
          My Booking
        </Link>
        <Link href="/availability" className="book-button">
          Book a Stay
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Global Comfort</h2>
        <p>{brand.tagline} Private serviced apartments near the University of Ilorin axis.</p>
        <Link href="/" className="footer-home">Back to Home</Link>
      </div>
      <div>
        <strong>Stay</strong>
        <Link href="/apartments">Apartments</Link>
        <Link href="/availability">Availability</Link>
        <Link href="/my-booking">My Booking</Link>
        <Link href="/rates">Rates</Link>
      </div>
      <div>
        <strong>Discover</strong>
        <Link href="/facilities">Facilities</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/location">Location</Link>
        <Link href="/about">About</Link>
      </div>
      <div>
        <strong>Contact</strong>
        <p>{brand.address}</p>
        <a href={brand.whatsappHref}>WhatsApp: {brand.whatsapp}</a>
      </div>
      <p className="footer-bottom">Privacy · Terms · Booking Policy · Cancellation Policy · © Global Comfort</p>
    </footer>
  );
}

export function BookingSearch({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "booking-search compact" : "booking-search"}>
      <label>
        <span>Check-in</span>
        <input type="date" name="checkin" />
      </label>
      <label>
        <span>Check-out</span>
        <input type="date" name="checkout" />
      </label>
      <label>
        <span>Guests</span>
        <select name="guests" defaultValue="2">
          <option>1 guest</option>
          <option>2 guests</option>
          <option>3 guests</option>
          <option>4+ guests</option>
        </select>
      </label>
      <label>
        <span>Apartment type</span>
        <select name="apartmentType" defaultValue="any">
          <option value="any">Any apartment</option>
          {rooms.map((room) => (
            <option key={room.slug} value={room.slug}>{room.name}</option>
          ))}
        </select>
      </label>
      <Link href="/availability" className="submit-button">
        Check Availability
      </Link>
    </form>
  );
}

export function RoomCard({ room = rooms[0] }) {
  return (
    <article className="room-card">
      <img src={room.image} alt={`${room.name} at Global Comfort`} />
      <div>
        <p className="eyebrow">{room.label}</p>
        <h3>{room.displayName}</h3>
        <p>{room.description}</p>
        <dl className="room-meta">
          <div><dt>Guests</dt><dd>{room.guests}</dd></div>
          <div><dt>Beds</dt><dd>{room.bed}</dd></div>
        </dl>
        <PriceBlock naira={room.naira} usd={room.usd} />
        <div className="chip-row">
          {room.amenities.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="card-actions">
          <Link href="/availability" className="mini-primary">Check Availability</Link>
          <Link href={`/apartments/${room.slug}`} className="mini-secondary">View Apartment</Link>
        </div>
      </div>
    </article>
  );
}

export function PriceBlock({ naira, usd }: { naira: string; usd: string }) {
  return (
    <div className="price-block">
      <span>From</span>
      <strong>{naira}</strong>
      <small>per night. USD fixed rate: {usd}</small>
    </div>
  );
}

export function PageHero({ title, text, image, compact = false }: { title: string; text: string; image: string; compact?: boolean }) {
  return (
    <section className={compact ? "page-hero compact-hero" : "page-hero"} style={{ backgroundImage: compact ? undefined : `linear-gradient(90deg, rgba(13,28,21,.82), rgba(13,28,21,.32)), url(${image})` }}>
      <div>
        <Link href="/" className="back-home">Back to Home</Link>
        <p className="eyebrow">Global Comfort · Ilorin</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function ApartmentCodeTable() {
  return (
    <div className="table-card">
      <table>
        <thead>
          <tr><th>Code</th><th>Apartment Name</th><th>Category</th><th>Inventory Use</th></tr>
        </thead>
        <tbody>
          {apartmentNames.map((unit) => (
            <tr key={unit.code}>
              <td><strong>{unit.code}</strong></td>
              <td>{unit.label}</td>
              <td>{unit.tier}</td>
              <td>Online booking and reception availability</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PlaceholderNote() {
  return (
    <p className="note">
      Some details, including exact room size and final booking policies, may be confirmed directly with Global Comfort before arrival.
    </p>
  );
}
