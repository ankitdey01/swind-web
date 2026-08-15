import type { Metadata, Viewport } from "next";
import { Manrope, DM_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const THEME_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem("swiggy-theme");
    var dark = t === "dark" || (t !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://swiggyinsidediscord.tech"),
  title: "Swiggy In Discord - Order Instamart without leaving Discord",
  
  description:
    "Add the Swiggy bot to your server, log in once, and order groceries from Swiggy Instamart with a slash command. Free, fast, and built for your community.",
  icons: {
    icon: "/logosquarerounded.ico",
    apple: "/logosquarerounded.ico"
  },
  openGraph: {
    title: "Swiggy In Discord",
    description:
      "Order Instamart groceries right inside your Discord server. Log in once, order with a command.",
    images: ["/banner.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiggy In Discord",
    description:
      "Order Instamart groceries right inside your Discord server. Log in once, order with a command.",
    images: ["/banner.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
