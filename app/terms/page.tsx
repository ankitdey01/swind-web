import { LegalPage } from "@/app/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro={'Welcome to the Swiggy Instamart Discord Bot ("the Bot," "the Service"). By adding the Bot to your Discord server or using its commands, you agree to these Terms. If you do not agree, do not use the Bot.'}
      sections={[
        {
          title: "1. What This Bot Does",
          body: <p>The Bot lets you browse Instamart, manage your cart, and place orders directly from Discord, using Swiggy&apos;s official MCP (Model Context Protocol) integration and OAuth 2.1 authentication. It&apos;s a Discord-native interface to your Swiggy account. It does not replace or modify anything about how Swiggy itself operates.</p>,
        },
        {
          title: "2. Who This Is",
          body: <p>This Bot is built and maintained independently as part of the Swiggy Builders Club program. It runs on Swiggy&apos;s official integration access, but day-to-day operation, uptime, and support are handled by the developer, not by Swiggy directly. Swiggy, Instamart, and related marks are trademarks of Bundl Technologies Pvt. Ltd.</p>,
        },
        {
          title: "3. Account Linking",
          body: <><p>To use ordering features, you&apos;ll link your Swiggy account via OAuth. This means:</p><ul><li>You authorize the Bot to act on your behalf for specific actions, including browsing, cart management, and placing orders, within the scope you approve.</li><li>You can revoke this access at any time through Swiggy&apos;s account settings or by unlinking within the Bot.</li><li>The Bot never sees or stores your Swiggy password. Authentication happens through Swiggy&apos;s own login flow.</li></ul></>,
        },
        {
          title: "4. Your Responsibilities",
          body: <ul><li>You&apos;re responsible for what happens under your linked account, including orders placed through the Bot.</li><li>Do not attempt to abuse, reverse-engineer, or overload the Bot&apos;s infrastructure.</li><li>Do not use the Bot for anything illegal or for automating orders in a way that violates Swiggy&apos;s own terms of service.</li><li>You must be old enough to hold a Swiggy account and place orders under applicable law in your jurisdiction.</li></ul>,
        },
        {
          title: "5. Orders, Payments, and Delivery",
          body: <p>All actual order fulfillment, payment processing, delivery, refunds, and customer support for orders themselves are handled by Swiggy/Instamart, not by the Bot. If your order shows up wrong, late, or not at all, that&apos;s a Swiggy support matter. The Bot is a command interface, not the fulfillment layer.</p>,
        },
        {
          title: "6. Availability",
          body: <p>This is an independently maintained project. It may go down, get rate-limited, or change without notice. There&apos;s no uptime guarantee. If Swiggy&apos;s API changes or access is revoked, the Bot may stop working entirely.</p>,
        },
        {
          title: "7. Limitation of Liability",
          body: <p>The Bot is provided as-is. To the extent permitted by law, the developer isn&apos;t liable for order issues, financial loss, missed deliveries, or any indirect damages arising from using the Bot. Your recourse for order-related problems is with Swiggy directly.</p>,
        },
        {
          title: "8. Changes to These Terms",
          body: <p>These Terms may be updated as the Bot evolves. Continued use after a change means you accept the update. Material changes will be noted here with a new “Last updated” date.</p>,
        },
        {
          title: "9. Contact",
          body: <p>Questions about these Terms can be raised in the <a href="https://discord.gg/KdTYGtXAu" target="_blank" rel="noreferrer">support Discord server</a> or via the contact details listed on the Bot&apos;s website.</p>,
        },
      ]}
    />
  );
}
