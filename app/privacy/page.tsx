import { LegalPage } from "@/app/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={'This explains what data the Swiggy Instamart Discord Bot ("the Bot") collects, why, and what you can do about it.'}
      sections={[
        {
          title: "1. What We Collect",
          body: <><h3>From Discord</h3><ul><li>Your Discord user ID, username, and server membership, needed to route commands and responses to the right person and server.</li></ul><h3>From Swiggy, once you link your account</h3><ul><li>An OAuth access token scoped to the permissions you approve during login. We do not collect or store your Swiggy password.</li><li>Order and cart data necessary to complete the actions you request, such as what&apos;s in your cart and order status. This is fetched live through Swiggy&apos;s API.</li></ul><h3>We do not collect</h3><ul><li>Payment card details, which are handled entirely by Swiggy.</li><li>Your Swiggy password.</li><li>Location data beyond what you provide directly to Swiggy through its own app or site for delivery purposes.</li></ul></>,
        },
        {
          title: "2. Why We Collect It",
          body: <p>Solely to make the Bot function: authenticating you, showing your cart, placing orders you request, and confirming order status back to you in Discord. Nothing here is used for advertising, resold, or shared with third parties beyond what&apos;s needed to complete your request through Swiggy&apos;s API.</p>,
        },
        {
          title: "3. How Long We Keep It",
          body: <ul><li>OAuth tokens are stored only as long as your account stays linked. Unlinking or revoking access removes them.</li><li>Discord IDs are retained only while you&apos;re using the Bot in a server it&apos;s active in.</li><li>We do not keep a permanent log of your order history beyond what&apos;s needed for the Bot to function in the moment. Your actual order history lives with Swiggy.</li></ul>,
        },
        {
          title: "4. Your Controls",
          body: <ul><li><strong>Unlink anytime:</strong> revoke the Bot&apos;s access via Swiggy&apos;s account settings or the Bot&apos;s own unlink command. This immediately invalidates the stored token.</li><li><strong>Data deletion:</strong> if you want any residual data tied to your Discord ID removed, reach out through the support server and it&apos;ll be handled.</li></ul>,
        },
        {
          title: "5. Security",
          body: <p>Tokens are handled over HTTPS end-to-end, and the OAuth flow follows the PKCE extension, an industry standard for preventing token interception. This is an independently run project, not a corporate-grade security operation, so treat it accordingly and do not expect enterprise SLAs.</p>,
        },
        {
          title: "6. Third Parties",
          body: <p>The only third party involved is Swiggy/Instamart itself, since that&apos;s who the Bot integrates with. We do not sell, rent, or share your data with advertisers, analytics brokers, or anyone else.</p>,
        },
        {
          title: "7. Changes to This Policy",
          body: <p>If what&apos;s collected or how it&apos;s used changes, this page will be updated with a new “Last updated” date. Material changes affecting how your data is handled will also be flagged in the support server.</p>,
        },
        {
          title: "8. Contact",
          body: <p>Questions, data deletion requests, or concerns can be raised in the <a href="https://discord.gg/sWSP3g5xKM" target="_blank" rel="noreferrer">support Discord server</a> or via the contact listed on the Bot&apos;s website.</p>,
        },
      ]}
    />
  );
}
