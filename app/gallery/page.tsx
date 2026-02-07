import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/photos/1.jpg", alt: "The Lost Sierra Lodge photo 1" },
  { src: "/photos/2.jpg", alt: "The Lost Sierra Lodge photo 2" },
  { src: "/photos/3.jpg", alt: "The Lost Sierra Lodge photo 3" },
  { src: "/photos/4.jpg", alt: "The Lost Sierra Lodge photo 4" },
  { src: "/photos/5.jpg", alt: "The Lost Sierra Lodge photo 5" },
  { src: "/photos/6.jpg", alt: "The Lost Sierra Lodge photo 6" },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
          <p className="mt-3 max-w-2xl text-neutral-700">
            A visual look at The Lost Sierra Lodge. (Next: we’ll organize by
            spaces like Great Room, Kitchen, Hot Tub, Bedrooms, etc.)
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
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
            See the Lodge
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <div
            key={p.src}
            className="overflow-hidden rounded-3xl border bg-white"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border bg-neutral-50 p-6">
        <h2 className="text-lg font-semibold tracking-tight">Add photos</h2>
        <p className="mt-2 text-neutral-700">
          Put images in <code className="rounded bg-white px-2 py-1">public/photos</code>{" "}
          named <code className="rounded bg-white px-2 py-1">1.jpg</code> through{" "}
          <code className="rounded bg-white px-2 py-1">6.jpg</code>.
        </p>
      </div>
    </main>
  );
}
