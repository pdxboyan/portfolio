export default function MinorProjectCard({
  title,
  label,
  description,
  image,
  alt,
  href,
  icons,
}) {
  return (
    <div
      className="
        bg-orange-200 rounded-2xl p-6 m-1 w-full
        shadow-lg transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl
        focus-within:-translate-y-1 focus-within:scale-[1.03] focus-within:shadow-2xl"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center"
      >
        <img
          src={image}
          alt={alt}
          className="w-32 h-32 object-cover rounded-2xl mr-8"
        />

        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <h3 className="font-text font-bold text-xl pr-3">
              {title}
            </h3>
            {label && (
              <p className="pt-1 font-subtext text-l text-gray-500">- {label}</p>
            )}
          </div>

          <p className="font-text text-gray-700">
            {description}
          </p>

          <div className="mt-auto pt-6">
            <div className="flex gap-4">
              {icons}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}