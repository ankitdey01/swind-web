import { Reveal } from "./Reveal";
import {
  ShieldIcon,
  CartIcon,
  MessageIcon,
  UsersIcon,
  CheckIcon,
  TrashIcon,
} from "./Icons";

const COMMANDS = [
  { cmd: "/login", desc: "Link your Swiggy account" },
  { cmd: "/authstatus", desc: "Check your session anytime" },
  { cmd: "/logout", desc: "Disconnect when you want" },
];

const TILES = [
  { emoji: "\u{1F95B}", label: "Milk", price: "\u20B927" },
  { emoji: "\u{1F95A}", label: "Eggs", price: "\u20B996" },
  { emoji: "\u{1F35E}", label: "Bread", price: "\u20B962" },
  { emoji: "\u{1F9FB}", label: "Tissues", price: "\u20B945" },
];

const CART_LINES = [
  { qty: "2\u00D7", name: "Amul Taaza milk", cost: "\u20B954" },
  { qty: "1\u00D7", name: "Farm eggs", cost: "\u20B996" },
  { qty: "1\u00D7", name: "Multigrain bread", cost: "\u20B962" },
];

const FOLKS = [
  { initial: "a", bg: "#23a55a" },
  { initial: "s", bg: "#f0b232" },
  { initial: "r", bg: "#3b82f6" },
  { initial: "m", bg: "#a855f7" },
];

export function Features() {
  return (
    <section id="features" className="section section--soft">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <h2>Everything, in the one place you already hang out.</h2>
          <p>
            No new apps to download, no tabs to juggle. Just a bot that brings
            Swiggy to your community.
          </p>
        </Reveal>

        <div className="feat-grid">
          <Reveal className="feat feat--wide" delay={60}>
            <div className="feat__icon">
              <ShieldIcon />
            </div>
            <h3>Log in once. Order often.</h3>
            <p>
              A one-time, secure login links your Swiggy account to the bot.
              Your password never touches the bot - Swiggy&apos;s own official
              login handles it. After that, you&apos;re ready to order whenever
              the craving hits.
            </p>
            <div className="feat__demo">
              {COMMANDS.map((c) => (
                <div className="mini-cmd" key={c.cmd}>
                  <code>{c.cmd}</code>
                  <span className="desc">{c.desc}</span>
                  <span className="ok">
                    <CheckIcon width={13} height={13} />
                    {c.cmd === "/logout" ? "Done" : "Ready"}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="feat feat--narrow" delay={120}>
            <div className="feat__icon">
              <MessageIcon />
            </div>
            <h3>Instamart in the chat</h3>
            <p>
              Shop essentials the way you talk - fast, casual, right where the
              conversation is. Pin the order, tag the server, move on.
            </p>
            <div className="feat__demo">
              <div className="tile-row">
                {TILES.map((t) => (
                  <div className="tile" key={t.label}>
                    <span className="emoji" aria-hidden>
                      {t.emoji}
                    </span>
                    <span className="label">{t.label}</span>
                    <span className="price">{t.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="feat feat--narrow" delay={60}>
            <div className="feat__icon">
              <CartIcon />
            </div>
            <h3>Your cart, your call</h3>
            <p>
              See what&apos;s in your Instamart cart, tweak quantities, and clear
              it out - all without leaving the server.
            </p>
            <div className="feat__demo">
              {CART_LINES.map((l) => (
                <div className="cart-line" key={l.name}>
                  <span className="qty">{l.qty}</span>
                  <span className="name">{l.name}</span>
                  <span className="cost">{l.cost}</span>
                  <button
                    type="button"
                    className="del"
                    aria-label={`Remove ${l.name}`}
                  >
                    <TrashIcon width={16} height={16} />
                  </button>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="feat feat--wide" delay={120}>
            <div className="feat__icon">
              <UsersIcon />
            </div>
            <h3>Built for the whole server</h3>
            <p>
              One person logs in, and the whole gang can chip in on a single
              order - groceries for movie night, snacks for game night, or
              emergency chai. It works in any server, from a 5-friend group to
              a 5,000-member community.
            </p>
            <div className="feat__demo" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <div className="avatar-stack" aria-hidden>
                {FOLKS.map((f) => (
                  <span className="av" style={{ background: f.bg }} key={f.initial}>
                    {f.initial}
                  </span>
                ))}
                <span className="av more">+1</span>
              </div>
              <span className="status-chip">
                <span className="led" />
                Sneha is ordering from #groceries
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}



