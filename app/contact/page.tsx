import Link from "next/link";
import { PageHero } from "../components";
import { brand, images } from "../site-data";

export default function ContactPage() {
  return (
    <main>
      <PageHero compact title="We're Here to Help With Your Stay." text="Questions about availability, your reservation or your upcoming stay? Get in touch with the Global Comfort team." image={images.courtyard} />
      <section className="page-content contact-layout">
        <article className="contact-details">
          <p className="eyebrow">Contact Global Comfort</p>
          <h2>{brand.name}</h2>
          <address>
            Before University of Ilorin Gate,<br />
            University Road,<br />
            Ilorin, Kwara State, Nigeria
          </address>
          <div className="contact-line">
            <span>WhatsApp</span>
            <a href={brand.whatsappHref}>{brand.whatsapp}</a>
          </div>
          <div className="contact-actions">
            <a href={brand.whatsappHref} className="mini-primary">WhatsApp</a>
            <Link href="/location" className="mini-secondary">Get Directions</Link>
            <Link href="/availability" className="mini-secondary">Book a Stay</Link>
          </div>
        </article>
        <form className="contact-form premium-form">
          <p className="eyebrow">Send Us a Message</p>
          {["Name", "Email", "Phone", "Subject"].map((item) => <label key={item}>{item}<input placeholder={item} /></label>)}
          <label>Message<textarea placeholder="How can the Global Comfort team help?" /></label>
          <button className="submit-button" type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}
