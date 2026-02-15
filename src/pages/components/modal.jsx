import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // ESC key handler
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal content */}
      <div
        className="
          relative
          w-[80%] max-h-[85vh]
          bg-orange-200 rounded-2xl
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <div className="sticky top-0 flex justify-end z-20 pt-4 pr-6">
          <button
            onClick={onClose}
            className="text-black text-3xl hover:opacity-70 transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}