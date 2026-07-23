export default function Footer() {
  return (
    <footer
      id="footer"
      className="px-6 py-8 text-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-2">
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