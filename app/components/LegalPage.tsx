import { Footer } from "./Footer";
import { Nav } from "./Nav";

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <div className="container">
          <article className="legal-document">
            <div className="legal-document__head">
              <span className="badge"><span className="dot" /> Swiggy In Discord</span>
              <h1>{title}</h1>
              <p className="legal-document__updated">Last updated: August 15, 2026</p>
              <p className="legal-document__intro">{intro}</p>
            </div>

            <div className="legal-document__body">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <div className="legal-document__copy">{section.body}</div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
