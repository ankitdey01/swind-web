import { useId } from "react";

export function Features() {
  return (
    <section id="features" className="section section--soft">
      <div className="container">
        <div className="section-head section-head--center">
          <h2>Everything, in the one place you already hang out.</h2>
          <p>
            No new apps to download, no tabs to juggle. Just a bot that brings
            Swiggy to your community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
          {grid.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950 p-6 rounded-3xl overflow-hidden"
            >
              <Grid size={20} />
              <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const grid = [
  {
    title: "One-Time Secure Login",
    description:
      "Link your Swiggy account with a single secure auth. Your password never touches the bot - Swiggy's own official login handles it.",
  },
  {
    title: "Instamart in the Chat",
    description:
      "Shop essentials the way you talk - fast, casual, right where the conversation is. Pin the order, tag the server, move on.",
  },
  {
    title: "Your Cart, Your Call",
    description:
      "See what's in your Instamart cart, tweak quantities, and clear it out - all without leaving the Discord server.",
  },
  {
    title: "Built for the Whole Server",
    description:
      "One person logs in, and the whole gang can chip in on a single order - groceries for movie night, snacks for game night, or emergency chai.",
  },
  {
    title: "Works in Any Server",
    description:
      "From a 5-friend group to a 5,000-member community, the bot scales to fit your server. No minimums, no restrictions.",
  },
  {
    title: "Slash-Command Simple",
    description:
      "Use /login, /order, /cart, and more. Commands you already know how to use, right inside the chat where you hang out.",
  },
  {
    title: "Real-Time Order Tracking",
    description:
      "Watch your delivery status update live in the channel - from restaurant confirmation to the rider at your door.",
  },
  {
    title: "No New Apps, No Tabs",
    description:
      "Everything happens inside Discord. No switching between apps, no copy-pasting addresses, no juggling browser tabs.",
  },
];

const Grid = ({ size }: { size?: number }) => {
  const pattern = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 to-zinc-300/30 dark:from-zinc-900/30 dark:to-zinc-900/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={pattern}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-black/10 stroke-black/10 dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: number[][];
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], i) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
