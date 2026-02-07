import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    // Lock background scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // ESC key handler
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on close
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
          relative z-10
          w-[95%] max-w-5xl max-h-[90vh]
          bg-neutral-900 rounded-2xl
          overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-white text-2xl
            hover:opacity-70 transition
          "
          aria-label="Close modal"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
