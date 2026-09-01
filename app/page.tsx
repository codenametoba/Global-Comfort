import Link from "next/link";
import { BookingSearch, RoomCard } from "./components";
import { brand, facilities, gallery, images, informativePages, rooms, stayReasons } from "./site-data";

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,24,18,.9), rgba(10,24,18,.38), rgba(10,24,18,.1)), url(${images.hero})` }}>
        <div className="hero-copy">
          <p className="eyebrow">GLOBAL COMFORT · UNIVERSITY ROAD, ILORIN</p>
          <h1>Space to settle in. Comfort to stay longer.</h1>
          <p>Thoughtfully furnished apartments near the University of Ilorin, designed for short visits, business trips, family stays and extended accommodation.</p>
          <div className="hero-actions">
            <Link href="/availability" className="book-button light">Book Your Stay</Link>
            <Link href="/apartments" className="outline-button">Explore Apartments</Link>
            <a href={brand.whatsappHref} className="text-link-light">WhatsApp Us</a>
          </div>
        </div>
        <BookingSearch />
      </section>

      <section className="editorial-grid">
        <img className="tall-photo" src={images.courtyard} alt="Global Comfort courtyard and apartment buildings" />
        <div className="editorial-copy">
          <p className="eyebrow">Welcome to Global Comfort</p>
          <h2>More room to feel at home.</h2>
          <p>Enjoy the privacy of your own apartment with the convenience and service of professional hospitality. Global Comfort gives visitors to Ilorin a calm, polished place to arrive, settle in and stay comfortably.</p>
          <Link href="/about" className="text-cta">About Global Comfort</Link>
        </div>
        <img src={images.loungeWide} alt="Furnished Global Comfort lounge" />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Our Apartments</p>
          <h2>Find the space that fits your stay.</h2>
          <p>From refined one bedroom apartments to larger family stays, each category is presented with clear nightly rates.</p>
        </div>
        <div className="room-grid feature-room-grid">{rooms.map((room) => <RoomCard key={room.slug} room={room} />)}</div>
      </section>

      <section className="immersive-band" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,27,19,.86), rgba(11,27,19,.28)), url(${images.mediaWall})` }}>
        <div>
          <p className="eyebrow">Your Space. Your Pace.</p>
          <h2>Settle into Ilorin with room to live, work, rest and reconnect.</h2>
          <p>Warm living spaces, clean finishes and private apartment layouts make each stay feel calm and considered.</p>
          <Link href="/gallery" className="book-button light">Explore the Property</Link>
        </div>
      </section>

      <section className="section muted why-section">
        <div className="section-heading">
          <p className="eyebrow">Why Global Comfort</p>
          <h2>Understated comfort. Practical convenience.</h2>
        </div>
        <div className="reason-grid">
          {[
            ["01", "MORE SPACE", "Private apartments provide more room than a conventional hotel stay."],
            ["02", "IDEAL LOCATION", "Conveniently positioned along the University of Ilorin axis."],
            ["03", "PRIVATE & COMFORTABLE", "Designed for guests who value privacy, convenience and a relaxed environment."],
            ["04", "FLEXIBLE STAYS", "Suitable for overnight visits, weekends and longer stays."],
          ].map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Guest Information</p>
          <h2>Everything guests need before they arrive.</h2>
        </div>
        <div className="info-link-grid">
          {informativePages.map((page) => (
            <Link href={page.href} key={page.href}>
              <span>{page.title}</span>
              <p>{page.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-band">
        <img src={images.aerial} alt="Aerial view of Global Comfort near University Road" />
        <div>
          <p className="eyebrow">Location</p>
          <h2>Stay close to where you need to be.</h2>
          <div className="feature-list">
            {["University of Ilorin axis", "Off Tanke Road", "Before the University gate", "WhatsApp booking support", "Furnished living spaces", "Flexible apartment sizes"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Facilities</p>
          <h2>Everything you need for a comfortable stay.</h2>
        </div>
        <div className="photo-strip">
          {facilities.map((facility) => (
            <article key={facility.title}>
              <img src={facility.image} alt={facility.title} />
              <h3>{facility.title}</h3>
              <p>{facility.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-preview">
        {gallery.slice(0, 5).map(([category, image]) => (
          <img key={image} src={image} alt={`${category} at Global Comfort`} />
        ))}
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>Exterior, interiors and apartment atmosphere in one elegant story.</h2>
          <Link href="/gallery" className="text-cta inverse">View Full Gallery</Link>
        </div>
      </section>

      <section className="section muted">
        <div className="section-heading">
          <p className="eyebrow">Made for Ilorin</p>
          <h2>Made for every reason you're in Ilorin.</h2>
        </div>
        <div className="stay-grid">
          {stayReasons.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,24,18,.88), rgba(10,24,18,.3)), url(${images.drive})` }}>
        <p className="eyebrow">Global Comfort · Ilorin</p>
        <h2>Your next stay starts here.</h2>
        <p>Find your apartment, choose your dates and make yourself comfortable.</p>
        <div className="hero-actions">
          <Link href="/availability" className="book-button light">Book Your Stay</Link>
          <a href={brand.whatsappHref} className="outline-button">Chat on WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
