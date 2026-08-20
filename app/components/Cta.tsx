import { LINKS } from "@/app/lib/site";
import { PlusIcon } from "./Icons";

export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <div>
          <div className="cta-band">
            <div className="cta-band__inner">
              <div className="cta-band__eyebrow" aria-hidden>
                <span className="cta-band__signal" />
                <code>#groceries</code>
                <span>server ready</span>
              </div>
              <h2>Your next order is one command away.</h2>
              <p>
                Add Swiggy to your server in two minutes. The group chat will
                thank you - especially at 11 pm.
              </p>
              <div className="cta-band__meta" aria-hidden>
                <span className="cta-band__command"><b>/</b> order snacks</span>
                <span className="cta-band__avatars"><i>a</i> <i>s</i> <i>m</i> <b>+4</b></span>
                <span className="cta-band__time">ETA 27 min</span>
              </div>
              <a href={LINKS.invite} target="_blank" rel="noreferrer" className="btn btn--ink btn--lg">
                <PlusIcon width={18} height={18} />
                Add Swiggy In Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
