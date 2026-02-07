import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-neutral-600">
              Portola • Graeagle • The Lost Sierra
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              A luxury, mountain-modern lodge built for group getaways.
            </h1>
            <p className="mt-5 text-lg text-neutral-700">
              Dog friendly, loaded with group amenities (hot tub & game tables),
              10 minutes from Portola or Graeagle, across from Chalet View Lodge
              and central to wedding venues, golf, and breweries.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-full bg-black px-6 py-3 text-white hover:opacity-90"
              >
                Check availability
              </Link>
              <Link
                href="/guide"
                className="rounded-full border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
              >
                Explore Portola & Graeagle
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-neutral-700">
              <Feature label="7-person hot tub" />
              <Feature label="Pool hall + poker table" />
              <Feature label="Outdoor dining for 10" />
              <Feature label="Wedding-central location" />
              <Feature label="Fully stocked group kitchen" />
              <Feature label="Dog friendly (2 max)" />
            </div>
          </div>

          {/* Placeholder image panel (we’ll swap with your photos next) */}
          <div className="rounded-3xl border bg-neutral-50 p-6">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100" />
            <p className="mt-4 text-sm text-neutral-600">
              Next: we’ll drop in your best hero photo and build the full
              gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Quick sections */}
      <section className="border-t bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <Card
            title="Stay together"
            body="Warm gathering spaces, natural light, and room for everyone to settle in—great room, deck, pool hall, and game room designed for connection."
            ctaHref="/stay"
            ctaLabel="See the lodge"
          />
          <Card
            title="Book direct"
            body="Check live availability and book through our Hospitable direct booking widget—simple, secure, and streamlined."
            ctaHref="/book"
            ctaLabel="Book now"
          />
          <Card
            title="Explore the Lost Sierra"
            body="A Portola/Graeagle tourism hub: breweries, golf, wedding venues, trails, lakes, and local tips from a family rooted here since the 1800s."
            ctaHref="/guide"
            ctaLabel="Start exploring"
          />
        </div>
      </section>
    </main>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border bg-white px-4 py-3">
      <span className="font-medium">{label}</span>
    </div>
  );
}

function Card({
  title,
  body,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{body}</p>
      <Link
        href={ctaHref}
        className="mt-5 inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
