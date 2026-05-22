export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <span
        className="pointer-events-none whitespace-nowrap rounded-full border border-green-500/40 bg-black/90 px-4 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2"
      >
        Chat with us on WhatsApp!
      </span>

      {/* Button */}
      <a
        href="https://wa.me/918777080798?text=Hi%20ABSolute%20Fitness%2C%20I%27d%20like%20to%20book%20a%20free%20trial."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-300 hover:scale-110 animate-pulse-glow"
        style={{ background: "#25D366" }}
      >
        {/* Official WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-8 w-8"
          fill="white"
          aria-hidden="true"
        >
          <path d="M24 4C12.95 4 4 12.95 4 24c0 3.55.95 6.9 2.6 9.8L4 44l10.45-2.55A19.87 19.87 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.1 0-6-.8-8.55-2.2l-.6-.35-6.2 1.5 1.55-5.95-.4-.65A15.93 15.93 0 0 1 8 24c0-8.84 7.16-16 16-16s16 7.16 16 16-7.16 16-16 16zm8.75-11.9c-.48-.24-2.83-1.4-3.27-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.03-.75-3.87-2.39-1.43-1.27-2.4-2.85-2.68-3.33-.28-.48-.03-.74.21-.98.22-.21.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.94-.78-.81-1.08-.82-.28-.01-.6-.01-.92-.01-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.15.5 2.04.79 2.74 1.01 1.15.36 2.2.31 3.03.19.92-.14 2.83-1.16 3.23-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
        </svg>
      </a>
    </div>
  );
}
