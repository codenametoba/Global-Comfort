import { PageHero } from "../components";
import { images } from "../site-data";

const faqs = [
  "What time is check in?",
  "What time is check out?",
  "Can I modify my reservation?",
  "Can I cancel my booking?",
  "Can I pay at the hotel?",
  "Do you accept bank transfer?",
  "Can I book multiple rooms?",
  "Are children allowed?",
  "How do I contact reception?",
  "How do I find Global Comfort?",
];

export default function FaqPage() {
  return (
    <main>
      <PageHero title="Frequently Asked Questions" text="Helpful guest answers for booking, payment, contact and arrival." image={images.lounge} />
      <section className="page-content faq-list">
        {faqs.map((faq) => <details className="faq-item" key={faq}><summary>{faq}</summary><p>The Global Comfort team can confirm the most current details for your stay.</p></details>)}
      </section>
    </main>
  );
}
