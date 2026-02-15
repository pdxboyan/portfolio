import Animate from "./animateHeaders";

export default function WriteupLayout({
  title,
  date,
  image,
  imageAlt,
  children,
}) {
  return (
      <section className="bg-orange-200 rounded-2xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center">
          {/* Title */}
          <Animate text={title} duration={2000} variant="secondary"/>
          <p className="font-subtext text-l mb-8"> {date}</p>

          {image && (
            <img
              src={image}
              alt={imageAlt}
              className="w-3/4 aspect-[2.6/1] object-cover rounded-2xl shadow-lg"
            />
          )}
        </div>

        {/* Article */}
        <article className="max-w-[75%] mx-auto mt-16 space-y-8">

          {children}

        </article>
      </section>
  );
}