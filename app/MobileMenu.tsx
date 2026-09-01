"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type MobileMenuProps = {
  items: string[][];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div className={open ? "mobile-menu is-open" : "mobile-menu"} ref={menuRef}>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav aria-label="Mobile navigation">
        {items.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/my-booking" onClick={() => setOpen(false)}>
          My Booking
        </Link>
      </nav>
    </div>
  );
}
