import { LINKS } from "@/app/lib/site";
import { DiscordMockup } from "./DiscordMockup";
import { CheckIcon, DiscordIcon, PlusIcon, ShieldIcon, ClockIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__badge-row">
              <span className="badge badge--server-context">
                <span className="badge__brand">SWIGGY</span>
                <span className="badge__divider" />
                <span className="badge__copy">Now in your own Discord server</span>
              </span>
            </div>

            <h1>
              Order<span className="hero__mobile-break"><br /></span> groceries.{" "}
              <span className="hl">Stay in the chat.</span>
            </h1>

            <p className="hero__sub">
              Swiggy In Discord brings Instamart to your server. Link your
              Swiggy account once, then order everything from milk to mozzarella
              with a slash command - no tabs, no apps, no FOMO on{" "}
              <code style={{ fontSize: "0.9em" }}>#general</code>.
            </p>

            <div className="hero__cta">
              <a href={LINKS.invite} target="_blank" rel="noreferrer" className="btn btn--primary btn--lg">
                <PlusIcon width={18} height={18} />
                Add to Discord
              </a>
              <a href={LINKS.support} target="_blank" rel="noreferrer" className="btn btn--discord btn--lg">
                <DiscordIcon width={18} height={18} />
                Join the support server
              </a>
            </div>

            <div className="hero__trust">
              <span>
                <CheckIcon width={15} height={15} />
                Free to add
              </span>
              <span>
                <ClockIcon width={15} height={15} />
                2-minute setup
              </span>
              <span>
                <ShieldIcon width={15} height={15} />
                Secure login
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <DiscordMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
