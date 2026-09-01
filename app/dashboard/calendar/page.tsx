import { PageHero } from "../../components";
import { apartmentNames, images } from "../../site-data";

export default function DashboardCalendarPage() {
  return (
    <main>
      <PageHero title="Availability Calendar" text="Internal calendar concept showing each physical apartment code against dates and room status." image={images.aerial} />
      <section className="page-content table-card">
        <table>
          <thead><tr><th>Apartment</th><th>Today</th><th>Tomorrow</th><th>Next Stay</th><th>Status</th></tr></thead>
          <tbody>
            {apartmentNames.map((unit, index) => (
              <tr key={unit.code}>
                <td><strong>{unit.code}</strong> · {unit.label}</td>
                <td>{index % 3 === 0 ? "Occupied" : "Available"}</td>
                <td>{index % 4 === 0 ? "Cleaning" : "Available"}</td>
                <td>Awaiting live booking data</td>
                <td>{unit.tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
