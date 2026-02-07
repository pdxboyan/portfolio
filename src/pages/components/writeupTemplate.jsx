import Animate from "./animateHeaders";

export default function WriteupLayout({
  title,
  date,
  image,
  imageAlt,
  children,
}) {
  return (
    <main className="mt-24 min-h-screen">
      <section className="max-w-md md:max-w-7xl bg-orange-200 rounded-2xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Title */}
          <Animate text={title} duration={2000} variant="secondary"/>
          <p className="font-subtext text-l"> {date}</p>

          {image && (
            <img
              src={image}
              alt={imageAlt}
              className="max-w-fit shadow-xl"
            />
          )}
        </div>

        {/* Article */}
        <article className="mt-16 space-y-8 leading-relaxed">

          {children}

        </article>
      </section>
    </main>
  );
}