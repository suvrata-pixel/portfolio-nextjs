export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-violet-100 bg-[#FAF9FF] px-6 py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        
        <p className="text-lg font-medium italic tracking-wide text-gray-800">
          Rooted in Science. Driven by Code.
        </p>

        
        <p className="text-sm text-gray-600">
          © 2026 Suvrata. All rights reserved.
        </p>

        
        <p className="text-sm text-gray-500">
          Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}