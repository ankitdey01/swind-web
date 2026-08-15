import { GROCERIES } from "@/app/lib/site";

function Group() {
  return (
    <div className="marquee__group" aria-hidden>
      {GROCERIES.map((item) => (
        <span className="marquee__item" key={item.name}>
          <span style={{ fontSize: 17 }}>{item.emoji}</span>
          {item.name}
          <span className="sep">{"\u2022"}</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}

