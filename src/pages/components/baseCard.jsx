import clsx from "clsx";

export default function BaseCard({ children, className, onClick }) {
  return (
    <div
        onClick={onClick}
        onKeyDown={(e) => {
            if (!onClick) return;

            if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
            }
        }}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        className={clsx(
        `
        bg-orange-200 rounded-2xl
        shadow-lg transition-all duration-300 ease-out
        hover:shadow-2xl
        focus-within:shadow-2xl
        `,
        onClick && "cursor-pointer",
        className
        )}
    >
      {children}
    </div>
  );
}
