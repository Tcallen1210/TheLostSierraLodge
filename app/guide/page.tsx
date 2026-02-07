import Link from "next/link";

const guides = [
  { href: "/guide/graeagle", title: "Graeagle", desc: "Town highlights, food, and seasonal vibe." },
  { href: "/guide/portola", title: "Portola", desc: "Essentials, rail museum, local stops." },
  { href: "/guide/breweries", title: "Breweries", desc: "From Eureka Peak to The Brewing Lair and beyond." },
  { href: "/guide/golf", title: "Golf", desc: "Feather River Park, Graeagle Meadows, Nakoma, and more." },
];

export default function GuideHome() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Portola & Graeagle Guide
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        A tourism hub centered on The Lost Sierra Lodge—our favorite local
        recommendations, wedding-weekend logistics, and outdoor highlights.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="rounded-3xl border bg-white p-6 hover:bg-neutral-50"
          >
            <h2 className="text-lg font-semibold tracking-tight">{g.title}</h2>
            <p className="mt-2 text-sm text-neutral-700">{g.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
