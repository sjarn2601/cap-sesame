"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBook, IconChart, IconClock, IconMic, IconTarget, IconToday, IconUser } from "./Icons";

const ITEMS = [
  { href: "/aujourdhui", label: "Aujourd'hui", icon: IconToday, mobile: true },
  { href: "/apprendre", label: "Apprendre", icon: IconBook, mobile: true },
  { href: "/entrainement", label: "S'entraîner", icon: IconTarget, mobile: true },
  { href: "/concours", label: "Concours blancs", icon: IconClock, mobile: true },
  { href: "/progres", label: "Progrès", icon: IconChart, mobile: true },
  { href: "/oraux", label: "Oraux", icon: IconMic, mobile: false },
  { href: "/profil", label: "Profil", icon: IconUser, mobile: false },
];

export function StudentNav({ variant }: { variant: "top" | "bottom" }) {
  const path = usePathname();
  const items = variant === "bottom" ? ITEMS.filter((i) => i.mobile) : ITEMS;
  return (
    <nav className={variant === "top" ? "mainnav" : "bottomnav"} aria-label="Navigation principale">
      {items.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} aria-current={path === href || path.startsWith(href + "/") ? "page" : undefined}>
          {variant === "bottom" && <Icon />}
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
