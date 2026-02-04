"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Philosophy", href: "/philosophy" },
  { name: "Program", href: "/program" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card border-b border-border">
      <nav className="mx-auto max-w-5xl px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
            NIHON K9
          </Link>
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-accent"
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
