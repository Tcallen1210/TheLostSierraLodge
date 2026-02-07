import Link from "next/link";

export default function PoliciesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Policies</h1>
      <p className="mt-3 text-neutral-700">
        We want your stay to be easy, safe, and stress-free. These policies help
        protect our cleaners, the home, and future guests.
      </p>

      <div className="mt-10 space-y-8">
        <Section title="Dog Policy">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>Up to two well-behaved dogs are welcome with prior approval.</li>
            <li>$50 per dog per stay.</li>
            <li>
              All dogs must be included in your reservation so the home can be
              prepared properly.
            </li>
            <li>
              If evidence of an undisclosed animal is found, we may request
              reimbursement for documented additional cleaning or damages.
            </li>
          </ul>
        </Section>

        <Section title="Winter Travel & Snow Removal (Nov–Apr)">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>
              This is a true mountain property. Guests should be prepared for
              snow and changing conditions.
            </li>
            <li>
              Depending on weather, 4WD/AWD with snow tires and/or chains may be
              required.
            </li>
            <li>
              Refunds are not provided for weather, snow depth, or road
              conditions (standard cancellation policy applies).
            </li>
            <li>
              We make a reasonable effort to keep access cleared as accumulation
              builds, but snow removal is not a guaranteed amenity. Conditions
              may vary during storms and delays are possible.
            </li>
            <li>Shovels are provided for walkways/decks and light snowfall.</li>
          </ul>
        </Section>

        <Section title="Security Cameras">
          <p className="text-neutral-700">
            Two exterior cameras are on site—one above the front door and one
            facing the driveway/parking area. Cameras record exterior entry
            areas only. There are no cameras inside the home or in any private
            spaces. Footage may be used to verify occupancy limits, pet
            policies, and house rules.
          </p>
        </Section>

        <Section title="Cleaning">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>A standard cleaning fee of $250 applies to all reservations.</li>
            <li>
              For stays longer than eight nights, a required mid-stay cleaning
              will be scheduled on the ninth day ($250).
            </li>
          </ul>
        </Section>

        <Section title="RV Hookup">
          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>RV parking is permitted with prior approval.</li>
            <li>RVs may not be used to increase guest occupancy.</li>
            <li>
              A hookup is available for $50 per night when arranged in advance.
            </li>
          </ul>
        </Section>

        <Section title="Early Check-In / Late Check-Out">
          <p className="text-neutral-700">
            We’re happy to offer early check-in or late check-out when possible.
            Because of the size of the home and the time required for a full
            turnover, availability depends on our cleaning schedule and adjacent
            bookings. In some cases (same-day arrival/departure), an expedited
            turnover may be available as a $100 upgrade, but this can’t be
            confirmed until closer to your stay.
          </p>
        </Section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/book"
          className="rounded-full bg-black px-6 py-3 text-white hover:opacity-90"
        >
          Book Now
        </Link>
        <Link
          href="/stay"
          className="rounded-full border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
        >
          Back to The Lodge
        </Link>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
