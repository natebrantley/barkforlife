import { TuberList } from "@/components/tuber-list";
import { ExternalLink } from "@/components/external-link";
import { siteConfig } from "@/site.config";

const nav = [
  { href: "#tuber-sale", label: "Tuber sale" },
  { href: "#walk", label: "Walk" },
  { href: "#contribute", label: "Contribute" },
  { href: "#tubers", label: "Tuber list" },
] as const;

export default function Home() {
  const mailto = `mailto:${siteConfig.links.teamEmail}`;

  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#tuber-sale"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="border-b border-[var(--bfl-card-border)] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--bfl-ink)] sm:text-left">
            {siteConfig.siteName}
          </p>
          <nav
            aria-label="Page sections"
            className="flex flex-wrap justify-center gap-2 sm:justify-end"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/50 px-3 py-1.5 text-sm font-medium text-[var(--bfl-ink)] transition hover:bg-[var(--bfl-accent)]/15"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-12 px-4 py-10 pb-24">
        <section
          id="tuber-sale"
          className="rounded-3xl border border-[var(--bfl-card-border)] bg-[var(--bfl-blue)]/60 p-6 shadow-md sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--bfl-accent)]">
            {siteConfig.tuberSale.presentedBy}
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-[var(--bfl-ink)] sm:text-4xl">
            {siteConfig.tuberSale.headline}
          </h1>
          <p className="mt-4 text-lg text-[var(--bfl-muted)]">
            {siteConfig.tuberSale.dateLabel} · {siteConfig.tuberSale.time}
          </p>
          <p className="mt-2 text-lg font-medium text-[var(--bfl-ink)]">
            {siteConfig.tuberSale.addressLine1}
            <br />
            {siteConfig.tuberSale.cityStateZip}
          </p>
          <p className="mt-4 text-[var(--bfl-muted)]">
            Organizer:{" "}
            <span className="font-semibold text-[var(--bfl-ink)]">
              {siteConfig.tuberSale.organizer}
            </span>
          </p>
          <p className="mt-4 max-w-2xl rounded-2xl bg-white/70 p-4 text-[var(--bfl-ink)]">
            {siteConfig.tuberSale.charityLine}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#tubers"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--bfl-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[var(--bfl-accent-hover)]"
            >
              View tuber list
            </a>
            <ExternalLink
              href={siteConfig.links.relayUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[var(--bfl-accent)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--bfl-accent)] transition hover:bg-[var(--bfl-purple)]"
            >
              Relay team site
            </ExternalLink>
          </div>
        </section>

        <section
          id="walk"
          className="rounded-3xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/50 p-6 shadow-md sm:p-10"
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--bfl-ink)] sm:text-3xl">
            {siteConfig.mainWalk.title}
          </h2>
          <p className="mt-1 text-lg italic text-[var(--bfl-accent)]">
            {siteConfig.mainWalk.tagline}
          </p>
          <p className="mt-4 text-lg text-[var(--bfl-muted)]">
            {siteConfig.mainWalk.dateLabel} · {siteConfig.mainWalk.time}
          </p>
          <p className="mt-2 font-medium text-[var(--bfl-ink)]">
            {siteConfig.mainWalk.route}
          </p>
          <ul className="mt-3 list-inside list-disc text-[var(--bfl-muted)]">
            {siteConfig.mainWalk.options.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="mt-4 text-[var(--bfl-muted)]">{siteConfig.mainWalk.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLink
              href={siteConfig.links.relayUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--bfl-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[var(--bfl-accent-hover)]"
            >
              Register &amp; team info (Relay)
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.fundraisingUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[var(--bfl-accent)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--bfl-accent)] transition hover:bg-white"
            >
              ACS fundraising page
            </ExternalLink>
          </div>
        </section>

        <section
          id="contribute"
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-[var(--bfl-card-border)] bg-white/85 p-6 shadow-md sm:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--bfl-ink)]">
              {siteConfig.contribute.financialTitle}
            </h2>
            <p className="mt-3 text-[var(--bfl-muted)]">
              {siteConfig.contribute.financialBody}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <ExternalLink
                href={siteConfig.links.fundraisingUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[var(--bfl-accent)] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--bfl-accent-hover)]"
              >
                Donate via American Cancer Society
              </ExternalLink>
              <ExternalLink
                href={siteConfig.links.relayUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-blue)]/50 px-4 py-3 text-center text-sm font-semibold text-[var(--bfl-ink)] hover:bg-[var(--bfl-blue)]"
              >
                Relay For Life — Clark County
              </ExternalLink>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--bfl-card-border)] bg-white/85 p-6 shadow-md sm:p-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--bfl-ink)]">
              {siteConfig.contribute.timeTitle}
            </h2>
            <p className="mt-3 text-[var(--bfl-muted)]">
              {siteConfig.contribute.timeBody}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={mailto}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[var(--bfl-accent)] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--bfl-accent-hover)]"
              >
                Email {siteConfig.links.teamEmail}
              </a>
              <ExternalLink
                href={siteConfig.links.facebookGroupUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-pink)]/80 px-4 py-3 text-center text-sm font-semibold text-[var(--bfl-ink)] hover:bg-[var(--bfl-pink)]"
              >
                Join Facebook group
              </ExternalLink>
            </div>
          </div>
        </section>

        <section id="tubers" className="scroll-mt-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--bfl-ink)] sm:text-3xl">
            Tuber list
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--bfl-muted)]">
            Variety names and possible abbreviations marked on tubers. Some abbreviations
            repeat — use the full name to tell them apart.
          </p>
          <div className="mt-6">
            <TuberList />
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[var(--bfl-card-border)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium sm:justify-start">
            <ExternalLink
              href={siteConfig.links.relayUrl}
              className="text-[var(--bfl-accent)] underline-offset-4 hover:underline"
            >
              Relay
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.fundraisingUrl}
              className="text-[var(--bfl-accent)] underline-offset-4 hover:underline"
            >
              ACS fundraising
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.facebookGroupUrl}
              className="text-[var(--bfl-accent)] underline-offset-4 hover:underline"
            >
              Facebook
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.instagramUrl}
              className="text-[var(--bfl-accent)] underline-offset-4 hover:underline"
            >
              Instagram
            </ExternalLink>
            <a
              href={mailto}
              className="text-[var(--bfl-accent)] underline-offset-4 hover:underline"
            >
              Email
            </a>
          </div>
          <p className="text-center text-sm text-[var(--bfl-muted)] sm:text-left">
            {siteConfig.hashtags.join(" ")}
          </p>
          <p className="text-center text-xs text-[var(--bfl-muted)] sm:text-left">
            This site does not process donations or tuber payments — it links to official
            American Cancer Society and Relay For Life pages and team contact.
          </p>
        </div>
      </footer>
    </div>
  );
}
