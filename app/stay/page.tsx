import Link from "next/link";

export default function StayPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight">The Lodge</h1>
      <p className="mt-3 text-neutral-700">
        When you enter The Lost Sierra Lodge, the home opens up around you—
        warm gathering spaces, natural light, and room for everyone to settle
        in. Some guests gravitate to the pool hall, others to the great room or
        deck, but the entire lodge is designed to make it easy for groups to
        relax, connect, and enjoy the mountains.
      </p>

      {/* Quick CTAs */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/book"
          className="rounded-full bg-black px-6 py-3 text-white hover:opacity-90"
        >
          Book Now
        </Link>
        <Link
          href="/gallery"
          className="rounded-full border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
        >
          View photos
        </Link>
        <Link
          href="/guide"
          className="rounded-full border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
        >
          Explore Portola & Graeagle
        </Link>
      </div>

      {/* Good to know summary */}
      <div className="mt-8 rounded-3xl border bg-neutral-50 p-6">
        <h2 className="text-lg font-semibold tracking-tight">Good to know</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
          <li>Dog friendly (2 max) • $50 per dog per stay</li>
          <li>Winter travel can require AWD/4WD + chains (Nov–Apr)</li>
          <li>Two exterior security cameras (front door + driveway)</li>
          <li>
            $250 cleaning fee • Mid-stay cleaning required on day 9 for 9+ nights
          </li>
          <li>RV hookup available ($50/night) with prior approval</li>
        </ul>
        <div className="mt-4">
          <Link href="/policies" className="underline">
            Read full policies
          </Link>
        </div>
      </div>

      {/* Highlights grid */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card title="Great Room">
          <p>
            A spacious open layout brings everyone together. Relax on the
            sectional and enjoy the 75&quot; smart TV (guest mode), or curl up by
            the wood stove. Charging stations (USB-A, USB-C, outlets) are placed
            throughout for convenience.
          </p>
          <p className="mt-3">
            A guitar is ready for guests who want to play, and a piano
            restoration is currently in progress.
          </p>
        </Card>

        <Card title="Pool Hall">
          <p>
            A dedicated entertainment space with an 8&apos; pool table, bar seating,
            and a comfortable lounge area. A Bluetooth soundbar sets the
            atmosphere, and French doors open directly to the deck and gas fire
            pit for easy indoor/outdoor flow.
          </p>
        </Card>

        <Card title="Game Room">
          <p>
            A professional 8-person poker table (chips + cards included).
            Convertible top works as a puzzle/game table and can serve as
            additional dining space when needed.
          </p>
        </Card>

        <Card title="Kitchen & Dining (Fully Stocked)">
          <p>
            Equipped for preparing meals for groups up to ten with attention to
            quality and detail. Full sets for ten: plates, bowls, wine glasses,
            tumblers, flatware, and steak knives (plus disposables too).
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>14-piece ceramic pots & pans set</li>
            <li>Knife block + sharpener, cutting boards, baking trays</li>
            <li>Muffin tins, measuring cups, mixing bowls, utensils</li>
            <li>
              KitchenAid mixer, blender, rice maker, popcorn machine (bring
              kernels), crockpots, air fryer/toaster oven combo
            </li>
            <li>
              Pantry: 20+ spices, seasoning blends, BBQ rub, flour, sugars,
              pancake mix, maple syrup
            </li>
            <li>
              Coffee/tea station: drip pot + K-Cup machine, complimentary coffee
              grounds & pods, decaf, kettle, Earl Grey + green tea
            </li>
          </ul>

          <p className="mt-4">
            A built-in desk with USB charging is integrated into the cabinetry.
            Wi-Fi router is placed in the living room for strong, reliable
            coverage.
          </p>
        </Card>

        <Card title="Wrap-Around Deck & Backyard">
          <p>
            An expansive outdoor setting with a 7-person hot tub (please bring
            your own pool towels), outdoor dining for ten, a BBQ grill, and a
            gas fire pit.
          </p>
          <p className="mt-3">
            In the backyard, two disc golf baskets provide a fun activity
            between meals or outings.
          </p>
        </Card>

        <Card title="Bedrooms (Comfort-first)">
          <p>
            Every bedroom includes hospitality-grade linens, four pillows per
            bed (two firm, two soft), room-darkening curtains, full-length
            mirrors, luggage racks, and nightstands with USB-A/USB-C/outlets.
            Ample storage via closets/drawers/dressers. Upstairs bedrooms have
            ceiling fans.
          </p>

          <div className="mt-4 space-y-3 text-sm text-neutral-700">
            <Bedroom
              title="Bedroom 1 (Downstairs)"
              items={[
                "King bed",
                "Two luggage racks",
                "Under-bed wheeled drawers",
                "Coat rack",
              ]}
            />
            <Bedroom
              title="Bedroom 2 (Loft Primary)"
              items={[
                "King bed",
                "En-suite bathroom",
                "Sitting area",
                "Walk-in closet (shelving + hangers)",
                "Wedding dress hook",
                "Emergency fire ladder",
                "Heaters + additional fans",
                "Extra supplies for children and dogs",
              ]}
            />
            <Bedroom
              title="Bedrooms 3 & 4"
              items={[
                "Queen beds",
                "Closets (shelving + hangers)",
                "Ceiling fans",
                "Each includes a twin air mattress",
              ]}
            />
            <Bedroom
              title="Bedroom 5"
              items={["Full bed", "Dresser", "Ceiling fan"]}
            />
          </div>
        </Card>

        <Card title="Bathrooms">
          <p>
            Each bathroom is stocked with fresh towels, soap, shampoo,
            conditioner, body wash, and makeup cloths. Hairdryers and charging
            stations (USB-A/USB-C/outlets) are provided in each bathroom, along
            with excellent lighting—great for wedding weekends and nights out.
          </p>

          <div className="mt-4 space-y-3 text-sm text-neutral-700">
            <Bathroom
              title="Bathroom 1 (Downstairs Full Bath)"
              items={["Shower + tub combo", "Attached laundry room"]}
            />
            <Bathroom
              title="Bathroom 2 (Primary En Suite)"
              items={[
                "Standing shower",
                "Separate jetted tub",
                "Wide vanity mirror",
              ]}
            />
            <Bathroom
              title="Bathroom 3 (Upstairs Full Bath)"
              items={["Large shower + tub combo", "Extended mirror"]}
            />
          </div>
        </Card>

        <Card title="Infants">
          <p>
            We provide outlet covers, a high chair, and a pack ’n play. Please
            bring your own baby bedding.
          </p>
        </Card>
      </div>

      {/* Story */}
      <section className="mt-10 rounded-3xl border bg-white p-6">
        <h2 className="text-xl font-semibold tracking-tight">
          Our story & local connections
        </h2>
        <p className="mt-3 text-neutral-700">
          This home is more than a rental. Built by our family in the late
          1980s, it remains a property we care for deeply. Renting it seasonally
          helps us preserve a place that has been part of our family for
          generations.
        </p>
        <p className="mt-3 text-neutral-700">
          Our roots in the Lost Sierra date back to the 1800s, and we love
          sharing local tips—from food and breweries to hiking trails, scenic
          parks, golf courses, and optional in-home services like yoga,
          bartending, and catering.
        </p>
        <p className="mt-3 text-neutral-700">
          To make planning easy, we provide a digital guidebook after booking,
          and we’re also building a public Portola/Graeagle guide right here on
          the site.
        </p>

        <div className="mt-5">
          <Link href="/guide" className="underline">
            Explore the guide
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="mt-10 rounded-3xl border bg-neutral-50 p-6">
        <h2 className="text-xl font-semibold tracking-tight">Location</h2>
        <p className="mt-3 text-neutral-700">
          We&apos;re ~0.2 miles up a sedan-accessible dirt road in a small forested
          neighborhood (only a few neighbors) with no through traffic—across
          Hwy 70 from Chalet View Lodge.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <List
            title="Cities & towns"
            items={[
              "Portola — 4 mi (~7 min)",
              "Blairsden — 6 mi (~9 min)",
              "Graeagle — 7 mi (~11 min)",
              "Clio — 10 mi (~15 min)",
              "Quincy — 29 mi (~35 min)",
              "Reno — 53 mi (~54 min)",
            ]}
          />
          <List
            title="Nearby wedding venues"
            items={[
              "Chalet View Lodge — 0.4 mi (~2 min)",
              "Graeagle Corner Barn — 6 mi (~8 min)",
              "Nakoma Resort — 9 mi (~17 min)",
              "Two Hearts — 11 mi (~15 min)",
              "White Sulphur Springs Ranch — 12 mi (~16 min)",
              "Twenty Mile House — 13 mi (~17 min)",
              "Kinship Ranch — 13 mi (~17 min)",
              "Gray Eagle Lodge — 14 mi (~29 min)",
              "Lost Marbles Ranch — 16 mi (~21 min)",
            ]}
          />
          <List
            title="Golf courses"
            items={[
              "Feather River Park Resort — 7 mi (~11 min)",
              "Graeagle Meadows — 8 mi (~11 min)",
              "Plumas Pines — 8 mi (~13 min)",
              "Grizzly Ranch — 9 mi (~16 min)",
              "Nakoma (The Dragon) — 9 mi (~17 min)",
              "Whitehawk Ranch — 14 mi (~19 min)",
            ]}
          />
          <List
            title="Breweries"
            items={[
              "Eureka Peak Brewing Co. — 0.4 mi (~2 min)",
              "The Brewing Lair — 5 mi (~7 min)",
              "Ronin Fermentation Project — 7 mi (~10 min)",
              "The Peak — 7 mi (~11 min)",
            ]}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="rounded-full bg-black px-6 py-3 text-white hover:opacity-90"
          >
            Book Now
          </Link>
          <Link
            href="/guide"
            className="rounded-full border border-neutral-300 px-6 py-3 hover:bg-neutral-50"
          >
            Browse the guide
          </Link>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border bg-white p-6">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-neutral-700">{children}</div>
    </section>
  );
}

function Bedroom({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <p className="font-medium text-neutral-900">{title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function Bathroom({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <p className="font-medium text-neutral-900">{title}</p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-6">
      <p className="text-sm font-semibold tracking-wide text-neutral-600">
        {title}
      </p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
