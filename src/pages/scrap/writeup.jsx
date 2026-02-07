import Animate from "./animateHeaders";

export default function WriteupLayout({
  title,
  subtitle,
  image,
  imageAlt,
  children,
}) {
  return (
    <main className="min-h-screen text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <Animate text={title} duration={2000} variant="primary" />

        {subtitle && (
          <p className="text-gray-400 text-lg mb-10">
            {subtitle}
          </p>
        )}

        {/* Article */}
        <article className="space-y-8 leading-relaxed">
          {image && (
            <img
              src={image}
              alt={imageAlt}
              className="rounded-2xl shadow-xl"
            />
          )}

          {children}
        </article>
      </section>
    </main>
  );
}