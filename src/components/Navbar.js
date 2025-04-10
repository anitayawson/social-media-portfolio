import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-pink-500">Social Butterfly</h1>
      <ul className="flex gap-4">
        {["Feed", "Bio", "Portfolio", "Highlights", "DM Me"].map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(" ", "")}`}
              className="text-sm text-pink-300 hover:text-pink-500 transition"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
