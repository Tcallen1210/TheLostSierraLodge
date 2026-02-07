export default function BookPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Check availability & book direct
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-700">
        Our live calendar and secure checkout are powered by Hospitable.
      </p>

      <div className="mt-8 overflow-hidden rounded-3xl border bg-white">
        <iframe
          id="booking-iframe"
          sandbox="allow-top-navigation allow-scripts allow-same-origin"
          style={{ width: "100%", height: 900 }}
          frameBorder="0"
          src="https://booking.hospitable.com/widget/a105309a-4a86-49fe-92c5-ff29ff6e37d5/1682300"
        />
      </div>

      <p className="mt-4 text-sm text-neutral-600">
        Tip: If you ever want the widget taller/shorter, adjust the height value
        (currently 900).
      </p>
    </main>
  );
}
