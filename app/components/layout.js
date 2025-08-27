"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ComponentsLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { name: "Button", href: "/components/button" },
    { name: "Card", href: "/components/card" },
    { name: "Input", href: "/components/input" },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-neutral-200 p-4 fixed top-16 left-0 h-[calc(100vh-64px)] overflow-y-auto hide-scrollbar">

        <h2 className="text-lg font-bold mb-4 text-white">Components</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded transition ${pathname === link.href
                    ? "bg-gray-700 text-white font-semibold"
                    : "hover:bg-gray-700"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>


      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">{children}</main>
    </div>
  );
}
