export default function MajorProjectCard({
  title,
  description,
  image,
  alt,
  href,
  icons,
}) {
  return (
    <div
      className="
        bg-orange-200 rounded-2xl p-6 flex flex-col
        shadow-lg transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl
        focus-within:-translate-y-2 focus-within:scale-[1.03] focus-within:shadow-2xl
      "
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <h3 className="font-text font-bold text-xl mb-2">{title}</h3>

        <img
          src={image}
          alt={alt}
          className="w-48 h-48 object-cover rounded-2xl mb-4"
        />

        <p className="font-text text-gray-700">
          {description}
        </p>
      </a>

      <div className="mt-auto pt-6">
        <div className="flex gap-4">
          {icons}
        </div>
      </div>
    </div>
  );
}