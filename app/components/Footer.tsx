import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/app/lib/site";
import { DiscordIcon, MailIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <Image src="/logo.webp" alt="" width={34} height={34} />
              <span>
                Swiggy <span style={{ color: "var(--brand)" }}>In</span> Discord
              </span>
            </Link>
            <p>
              Groceries from Swiggy Instamart, ordered from inside your Discord
              server. Made with {"\u{1F9E1}"} for the Swiggy Builders Club community.
            </p>
          </div>

          <div>
            <h4>Product</h4>
            <ul className="footer__links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <ul className="footer__links">
              <li>
                <a href={LINKS.invite} target="_blank" rel="noreferrer">
                  Add the bot to your server
                </a>
              </li>
              <li>
                <a href={LINKS.support} target="_blank" rel="noreferrer">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <DiscordIcon width={15} height={15} />
                    SwinD Support
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${LINKS.email}`}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <MailIcon width={15} height={15} />
                    {LINKS.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul className="footer__links">
              <li><a href="/terms">Terms and conditions</a></li>
              <li><a href="/privacy">Privacy policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{"\u00A9"} {year} Swiggy In Discord.</span>
          <span className="disclaimer">
            An official Swiggy Builders Club integration. Swiggy is a trademark of Bundl Technologies Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
}


