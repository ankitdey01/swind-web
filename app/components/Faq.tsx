"use client";

import { useState } from "react";
import { LINKS } from "@/app/lib/site";
import { Reveal } from "./Reveal";
import { PlusIcon } from "./Icons";

const FAQS = [
  {
    q: "What does this bot actually do?",
    a: (
      <>
        It brings Swiggy Instamart into your Discord server. Link your Swiggy
        account once, then browse, cart, and order groceries right from the
        chat using slash commands. No new apps, no leaving the server.
      </>
    ),
  },
  {
    q: "Is it free to use?",
    a: (
      <>
        Yes. Adding the bot to your server is free, and it stays free. You only
        pay Swiggy for your orders, the usual way.
      </>
    ),
  },
  {
    q: "Is my Swiggy account safe?",
    a: (
      <>
        Yes. Login uses Swiggy&apos;s own official, secure sign-in flow - the bot
        never sees or stores your password. Your session can be disconnected
        anytime with <code>/logout</code>.
      </>
    ),
  },
  {
    q: "Which commands can I use?",
    a: (
      <>
        Today: <code>/login</code>, <code>/logout</code>, <code>/authstatus</code>{" "}
        and <code>/ping</code>. Instamart cart and ordering commands are rolling
        out next - join the support server to be first in line.
      </>
    ),
  },
  {
    q: "Do I need to live somewhere specific?",
    a: (
      <>
        The bot orders through Swiggy Instamart, so wherever Instamart delivers
        in your city, the bot works. If Instamart isn&apos;t available at your
        address yet, your order will let you know right away.
      </>
    ),
  },
  {
    q: "Something broken, or got an idea?",
    a: (
      <>
        Join the{" "}
        <a href={LINKS.support} target="_blank" rel="noreferrer">
          Swiggy In Discord support server
        </a>{" "}
        and tell us - or write to{" "}
        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>. We read everything.
      </>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="section section--soft">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <h2>Quick answers.</h2>
          <p>Everything people usually ask before hitting “Add to Discord”.</p>
        </Reveal>

        <Reveal className="faq-list" delay={80}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className="faq-item" data-open={isOpen} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="icon" aria-hidden>
                    <PlusIcon width={16} height={16} />
                  </span>
                </button>
                <div className="faq-a-wrap">
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
