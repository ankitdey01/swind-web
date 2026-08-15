import Image from "next/image";
import { HashIcon, BikeIcon, LogoMark } from "./Icons";

const SERVER_EMOJI = ["\u{1F6D2}", "\u{1F389}", "\u2615", "\u{1F36F}"];

const CART_ITEMS = [
  { name: "Amul Taaza milk", qty: "2\u00D7", price: "\u20B954" },
  { name: "Farm eggs", qty: "1\u00D7", price: "\u20B996" },
  { name: "Multigrain bread", qty: "1\u00D7", price: "\u20B962" },
];

export function DiscordMockup() {
  return (
    <div className="dc-mock" role="img" aria-label="Preview of the Swiggy bot ordering groceries inside a Discord chat">
      <div className="dc-live" aria-hidden>
        <HashIcon width={14} height={14} />
        <span className="dc-live__channel">groceries</span>
        <span className="dc-live__state"><span className="dot" /> LIVE</span>
      </div>

      <div className="dc-window">
        <div className="dc-titlebar">
          <div className="dc-dots" aria-hidden>
            <i />
            <i />
            <i />
          </div>
          <span className="dc-title">Swiggy In Discord - groceries</span>
        </div>

        <div className="dc-body">
          <div className="dc-rail" aria-hidden>
            <div className="dc-srv dc-srv--active">
              <LogoMark width={22} height={22} />
            </div>
            <div className="dc-rail-divider" />
            {SERVER_EMOJI.map((e) => (
              <div className="dc-srv dc-srv--pill" key={e}>
                <span style={{ fontSize: 17 }}>{e}</span>
              </div>
            ))}
          </div>

          <div className="dc-chat">
            <div className="dc-channel">
              <HashIcon width={20} height={20} />
              groceries
            </div>

            <div className="dc-msgs">
              {/* user */}
              <div className="dc-msg rise rise--4">
                <div className="dc-avatar" style={{ background: "#23a55a" }} aria-hidden>
                  a
                </div>
                <div>
                  <div className="dc-msg__head">
                    <span className="dc-msg__name">aarav</span>
                    <span className="dc-msg__time">11:04 pm</span>
                  </div>
                  <p>
                    fresh out of dal and it&apos;s 11pm. anyone ordering today? {"\u{1F629}"}
                  </p>
                </div>
              </div>

              {/* bot reply + login embed */}
              <div className="dc-msg rise rise--5">
                <div className="dc-avatar dc-avatar--bot" style={{ background: "#fc8019" }} aria-hidden>
                  <Image src="/logorounded.webp" alt="" width={40} height={40} />
                </div>
                <div>
                  <div className="dc-msg__head">
                    <span className="dc-msg__name">Swiggy</span>
                    <span className="dc-msg__tag">BOT</span>
                    <span className="dc-msg__time">11:04 pm</span>
                  </div>
                  <p>
                    I&apos;ve got you. Log in once with your Swiggy account and
                    Instamart is right here in the chat.
                  </p>
                </div>
              </div>

              {/* user runs command */}
              <div className="dc-msg rise rise--6">
                <div className="dc-avatar" style={{ background: "#f0b232" }} aria-hidden>
                  s
                </div>
                <div>
                  <div className="dc-msg__head">
                    <span className="dc-msg__name">sneha</span>
                    <span className="dc-msg__time">11:05 pm</span>
                  </div>
                  <p>
                    <span className="dc-cmd-chip">
                      <span className="slash">/</span>login
                    </span>{" "}
                    adding bread &amp; eggs to the cart
                  </p>
                </div>
              </div>

              {/* bot confirms */}
              <div className="dc-msg rise rise--7">
                <div className="dc-avatar dc-avatar--bot" style={{ background: "#fc8019" }} aria-hidden>
                  <Image src="/logorounded.webp" alt="" width={40} height={40} />
                </div>
                <div>
                  <div className="dc-msg__head">
                    <span className="dc-msg__name">Swiggy</span>
                    <span className="dc-msg__tag">BOT</span>
                    <span className="dc-msg__time">11:05 pm</span>
                  </div>
                  <p>You&apos;re logged in {"\u{1F9E1}"} Instamart is all yours.</p>
                  <div className="dc-embed">
                    <div className="dc-embed__head">
                      <Image src="/logorounded.webp" alt="" width={22} height={22} />
                      Instamart cart
                    </div>
                    {CART_ITEMS.map((item) => (
                      <div className="dc-item" key={item.name}>
                        <span className="qty" style={{ fontSize: 11.5, fontWeight: 700, color: "#b7c3ff" }}>
                          {item.qty}
                        </span>
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                      </div>
                    ))}
                    <div className="dc-total">
                      <span className="label">Delivery {"\u00B7"} free</span>
                      <span className="amount">{"\u20B9"}212</span>
                    </div>
                    <button type="button" className="dc-embed__btn" aria-hidden>
                      Place order
                    </button>
                  </div>
                </div>
              </div>

              {/* typing */}
              <div className="dc-typing rise rise--8" aria-hidden>
                <div className="dc-typing__bubble">
                  <i />
                  <i />
                  <i />
                </div>
                <span>Swiggy is typing{"\u2026"}</span>
              </div>

              {/* delivered */}
              <div className="dc-msg rise rise--8">
                <div className="dc-avatar dc-avatar--bot" style={{ background: "#fc8019" }} aria-hidden>
                  <Image src="/logorounded.webp" alt="" width={40} height={40} />
                </div>
                <div>
                  <div className="dc-msg__head">
                    <span className="dc-msg__name">Swiggy</span>
                    <span className="dc-msg__tag">BOT</span>
                  </div>
                  <span className="dc-pill">
                    <BikeIcon width={16} height={16} />
                    Delivered in 27 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




