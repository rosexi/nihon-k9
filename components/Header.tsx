"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Philosophy", href: "/philosophy" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card border-b border-border">
      <nav className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-base font-bold uppercase tracking-tight text-foreground">
            NIHON K9
          </Link>
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    pathname === item.href
                      ? "text-accent border-b-2 border-accent pb-0.5"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
