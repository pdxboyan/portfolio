import BaseCard from "./baseCard";

export default function MajorProjectCard({
  title,
  description,
  image,
  alt,
  icons,
  onClick,
}) {
  return (
    <BaseCard
      onClick={onClick}
      className="
        p-6 flex flex-col
        hover:-translate-y-2 hover:scale-[1.03]
        focus-within:-translate-y-2 focus-within:scale-[1.03]
      "
    >
      <div className="flex flex-col items-center">
        <h3 className="font-text font-bold text-xl mb-2 text-center">
            {title}
        </h3>

        <img
            src={image}
            alt={alt}
            className="w-48 h-48 object-cover rounded-2xl mb-4"
        />

        <p className="font-text text-gray-700">
            {description}
        </p>
      </div>
      
      {icons && (
        <div className="mt-auto pt-6">
          <div className="flex gap-4">
            {icons}
          </div>
        </div>
      )}
    </BaseCard>
  );
}