import Image from "next/image";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Add the bot to your server",
    body: "Hit “Add to Discord”, pick a server, and approve the permissions. Takes under a minute.",
  },
  {
    num: "02",
    title: "Link your Swiggy account",
    body: "Run /login and follow the secure sign-in. Your password stays with Swiggy - the bot never sees it.",
  },
  {
    num: "03",
    title: "Order with a command",
    body: "Browse Instamart, check your cart, and order using simple slash commands. The whole server can join in.",
  },
  {
    num: "04",
    title: "Groceries arrive. Chat continues.",
    body: "Track your delivery without tab-hopping, and never miss the next meme in the group.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="how-grid">
          <div>
            <Reveal className="section-head">
              <h2>From invite to doorstep in four steps.</h2>
              <p>
                No setup screens, no install guides. If you can run a slash
                command, you can do this.
              </p>
            </Reveal>

            <div className="steps">
              {STEPS.map((step, i) => (
                <Reveal className="step" key={step.num} delay={i * 70}>
                  <span className="step__num" aria-hidden>
                    {step.num}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="how-shot" delay={120}>
            <div className="how-shot__bar" aria-hidden>
              <i />
              <i />
              <i />
              <span>discord - swiggy in discord</span>
            </div>
            <Image
              src="/ss.webp"
              alt="The Swiggy bot running inside a Discord server - a chat showing logged-in Swiggy orders"
              width={1440}
              height={1080}
              sizes="(max-width: 940px) 100vw, 48vw"
            />
            <div className="how-shot__cap">
              <span>The real deal, running in a server.</span>
              <span className="live">Ordering live</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
