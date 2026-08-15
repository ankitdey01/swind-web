"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS } from "@/app/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { DiscordIcon, MenuIcon, PlusIcon, CloseIcon } from "./Icons";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" aria-label="Swiggy In Discord home">
            <Image src="/logo.webp" alt="" width={34} height={34} priority />
            <span>
              Swiggy <span style={{ color: "var(--brand)" }}>In</span> Discord
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <a href={LINKS.invite} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm">
              <PlusIcon width={16} height={16} />
              Add to Discord
            </a>
            <button
              type="button"
              className="nav__burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
            </button>
          </div>
        </div>

        <div className="nav__mobile" data-open={open}>
          <div className="nav__mobile-inner">
            <ul className="nav__mobile-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={LINKS.support} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  Support server
                </a>
              </li>
            </ul>
            <div className="nav__mobile-cta">
              <a
                href={LINKS.invite}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
                onClick={() => setOpen(false)}
              >
                <PlusIcon width={17} height={17} />
                Add to Discord
              </a>
              <a
                href={LINKS.support}
                target="_blank"
                rel="noreferrer"
                className="btn btn--discord"
                aria-label="Join the support server"
                onClick={() => setOpen(false)}
              >
                <DiscordIcon width={18} height={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
