import Image from "next/image";
import { TuberList } from "@/components/tuber-list";
import { ExternalLink } from "@/components/external-link";
import { SectionStockPhoto } from "@/components/section-stock-photo";
import { dahliaPhotos, stockImages } from "@/data/stock-images";
import { siteConfig } from "@/site.config";

const nav = [
  { href: "#story", label: "About" },
  { href: "#walk", label: "Walk" },
  { href: "#contribute", label: "Contribute" },
] as const;

export default function Home() {
  const mailto = `mailto:${siteConfig.links.teamEmail}`;

  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#tuber-sale"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--bfl-ink)] focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--bfl-accent)]"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[var(--bfl-card-border)] bg-white/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            <Image
              src="/img/BFL-V_RGB.webp"
              alt="Bark for Life and American Cancer Society Relay For Life"
              width={280}
              height={84}
              className="h-14 w-auto max-w-[min(100%,260px)] object-contain object-center sm:object-left"
              priority
            />
            <div className="text-center sm:text-left">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight text-[var(--bfl-ink)]">
                {siteConfig.siteName}
              </p>
              <p className="mt-1 max-w-md text-sm leading-snug text-[var(--bfl-muted)]">
                {siteConfig.siteTagline}
              </p>
            </div>
          </div>
          <nav
            aria-label="Page sections"
            className="flex flex-wrap justify-center gap-2 sm:justify-end"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 min-w-[2.75rem] items-center justify-center rounded-full border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/50 px-3.5 py-2 text-sm font-medium text-[var(--bfl-ink)] transition-colors hover:bg-[var(--bfl-accent)]/15 active:bg-[var(--bfl-accent)]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-12 px-4 py-10 pb-28 sm:gap-14 sm:py-12 md:gap-16">
        <section
          id="story"
          className="scroll-mt-24 rounded-3xl border border-[var(--bfl-card-border)] bg-white/80 p-6 shadow-md ring-1 ring-black/[0.03] sm:p-10"
          aria-labelledby="story-heading"
        >
          <h2
            id="story-heading"
            className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--bfl-ink)] sm:text-2xl"
          >
            Why we&apos;re here
          </h2>
          <div className="mt-4 max-w-prose space-y-4 leading-relaxed">
            <p className="text-pretty text-[var(--bfl-muted)]">{siteConfig.story.mission}</p>
            <p className="text-pretty text-[var(--bfl-ink)]">{siteConfig.story.dahliaSale}</p>
          </div>
        </section>

        <section
          id="tuber-sale"
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-[var(--bfl-card-border)] bg-gradient-to-b from-white/95 via-[var(--bfl-purple)]/25 to-[var(--bfl-blue)]/50 shadow-lg shadow-[var(--bfl-accent)]/5 ring-1 ring-[var(--bfl-card-border)]/80"
        >
          <div className="h-1.5 w-full bg-[var(--bfl-accent)]" aria-hidden />
          <div className="p-6 sm:p-10">
            <div
              className={`mb-8 grid gap-4 ${dahliaPhotos.tuberSale ? "md:grid-cols-2" : ""}`}
            >
              <SectionStockPhoto
                src={stockImages.tuberSale.src}
                alt={stockImages.tuberSale.alt}
                className="shadow-md ring-1 ring-black/5"
              />
              {dahliaPhotos.tuberSale ? (
                <SectionStockPhoto
                  src={dahliaPhotos.tuberSale.src}
                  alt={dahliaPhotos.tuberSale.alt}
                  className="shadow-md ring-1 ring-black/5"
                />
              ) : null}
            </div>

            <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
              <span className="inline-flex rounded-full border border-[var(--bfl-accent)]/25 bg-[var(--bfl-accent)]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--bfl-accent)]">
                {siteConfig.tuberSale.presentedBy}
              </span>
              <p className="mt-3 max-w-xl text-pretty text-sm font-semibold leading-snug text-[var(--bfl-accent)] sm:text-base">
                {siteConfig.tuberSale.proceedsKicker}
              </p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-[1.65rem] font-bold leading-[1.15] tracking-tight text-[var(--bfl-ink)] text-balance sm:text-4xl sm:leading-tight">
                {siteConfig.tuberSale.headline}
              </h1>
              <p className="mt-3 text-sm font-medium text-[var(--bfl-muted)]">
                {siteConfig.tuberSale.subtitle}
              </p>
            </div>

            <dl className="mt-8 grid gap-3 rounded-2xl border border-[var(--bfl-card-border)]/80 bg-white/60 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5">
              <div className="sm:col-span-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--bfl-muted)]">
                  When
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--bfl-ink)]">
                  {siteConfig.tuberSale.dateLabel}
                  <span className="font-normal text-[var(--bfl-muted)]"> · </span>
                  {siteConfig.tuberSale.time}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--bfl-muted)]">
                  Where
                </dt>
                <dd className="mt-1 text-base font-semibold leading-snug text-[var(--bfl-ink)]">
                  {siteConfig.tuberSale.addressLine1}
                  <span className="mt-0.5 block text-sm font-normal text-[var(--bfl-muted)]">
                    {siteConfig.tuberSale.cityStateZip}
                  </span>
                </dd>
              </div>
              <div className="border-t border-[var(--bfl-card-border)]/60 pt-3 sm:col-span-1 sm:pt-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--bfl-muted)]">
                  Pricing
                </dt>
                <dd className="mt-1 text-[var(--bfl-ink)]">
                  <span className="text-base font-semibold">
                    {siteConfig.tuberSale.pricePrimary}
                  </span>
                  <span className="mt-1 block text-sm font-normal leading-snug text-[var(--bfl-muted)]">
                    {siteConfig.tuberSale.priceValueNote}
                  </span>
                </dd>
              </div>
              <div className="border-t border-[var(--bfl-card-border)]/60 pt-3 sm:col-span-1 sm:border-l sm:pl-4 sm:pt-4">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--bfl-muted)]">
                  Organizer
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--bfl-ink)]">
                  {siteConfig.tuberSale.organizer}
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl border-l-4 border-[var(--bfl-accent)] bg-white/85 py-4 pl-5 pr-4 shadow-sm">
              <p className="text-[0.95rem] leading-relaxed text-pretty text-[var(--bfl-ink)]">
                {siteConfig.tuberSale.charityLine}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#tubers"
                className="inline-flex min-h-12 min-w-[10rem] flex-1 items-center justify-center rounded-full bg-[var(--bfl-accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--bfl-accent-hover)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95 sm:flex-initial"
              >
                View Tuber List
              </a>
              <ExternalLink
                href={siteConfig.links.relayUrl}
                className="inline-flex min-h-12 min-w-[10rem] flex-1 items-center justify-center rounded-full border-2 border-[var(--bfl-accent)] bg-white/90 px-6 py-3 text-sm font-semibold text-[var(--bfl-accent)] shadow-sm transition-colors hover:border-[var(--bfl-accent-hover)] hover:bg-[var(--bfl-purple)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95 sm:flex-initial"
              >
                Relay team site
              </ExternalLink>
            </div>
          </div>
        </section>

        <section
          id="walk"
          className="scroll-mt-24 rounded-3xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/50 p-6 shadow-md ring-1 ring-black/[0.03] sm:p-10"
        >
          <SectionStockPhoto
            src={stockImages.mainWalk.src}
            alt={stockImages.mainWalk.alt}
            className="mb-6"
          />
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-balance text-[var(--bfl-ink)] sm:text-3xl">
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
          <ul className="mt-3 list-inside list-disc space-y-1.5 pl-0.5 text-[var(--bfl-muted)] marker:text-[var(--bfl-accent)]">
            {siteConfig.mainWalk.options.map((o) => (
              <li key={o} className="pl-1">
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-prose leading-relaxed text-[var(--bfl-muted)]">
            {siteConfig.mainWalk.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLink
              href={siteConfig.links.relayUrl}
              className="inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full bg-[var(--bfl-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-[var(--bfl-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
            >
              Register &amp; team info (Relay)
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.fundraisingUrl}
              className="inline-flex min-h-11 min-w-[11rem] items-center justify-center rounded-full border-2 border-[var(--bfl-accent)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--bfl-accent)] transition-colors hover:bg-[var(--bfl-purple)]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
            >
              ACS fundraising page
            </ExternalLink>
          </div>
        </section>

        <section id="contribute" className="scroll-mt-24 flex flex-col gap-6">
          <SectionStockPhoto
            src={stockImages.contribute.src}
            alt={stockImages.contribute.alt}
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--bfl-card-border)] bg-white/85 p-6 shadow-md ring-1 ring-black/[0.03] sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--bfl-ink)]">
                {siteConfig.contribute.financialTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--bfl-muted)]">
                {siteConfig.contribute.financialBody}
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <ExternalLink
                  href={siteConfig.links.fundraisingUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--bfl-accent)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--bfl-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
                >
                  Donate via American Cancer Society
                </ExternalLink>
                <ExternalLink
                  href={siteConfig.links.relayUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-blue)]/50 px-4 py-3 text-center text-sm font-semibold text-[var(--bfl-ink)] transition-colors hover:bg-[var(--bfl-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
                >
                  Relay For Life — Clark County
                </ExternalLink>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--bfl-card-border)] bg-white/85 p-6 shadow-md ring-1 ring-black/[0.03] sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[var(--bfl-ink)]">
                {siteConfig.contribute.timeTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--bfl-muted)]">
                {siteConfig.contribute.timeBody}
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={mailto}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--bfl-accent)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--bfl-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
                >
                  Email {siteConfig.links.teamEmail}
                </a>
                <ExternalLink
                  href={siteConfig.links.facebookGroupUrl}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-pink)]/80 px-4 py-3 text-center text-sm font-semibold text-[var(--bfl-ink)] transition-colors hover:bg-[var(--bfl-pink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] active:brightness-95"
                >
                  Join Facebook group
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tubers"
          className="scroll-mt-24 rounded-3xl border border-[var(--bfl-card-border)] bg-white/85 p-6 shadow-lg ring-1 ring-black/[0.03] sm:p-10"
          aria-labelledby="tubers-heading"
        >
          <div
            className={`mb-8 grid gap-4 ${dahliaPhotos.tuberList ? "md:grid-cols-2" : ""}`}
          >
            <SectionStockPhoto
              src={stockImages.tuberList.src}
              alt={stockImages.tuberList.alt}
              className="shadow-md ring-1 ring-black/5"
            />
            {dahliaPhotos.tuberList ? (
              <SectionStockPhoto
                src={dahliaPhotos.tuberList.src}
                alt={dahliaPhotos.tuberList.alt}
                className="shadow-md ring-1 ring-black/5"
              />
            ) : null}
          </div>
          <div className="mb-2 inline-flex rounded-full border border-[var(--bfl-accent)]/20 bg-[var(--bfl-accent)]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--bfl-accent)]">
            Reference
          </div>
          <h2
            id="tubers-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-balance text-[var(--bfl-ink)] sm:text-3xl"
          >
            Tuber List
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-[var(--bfl-muted)]">
            Variety names and abbreviations you may see marked on tubers. Some abbreviations
            repeat — use the full name to tell them apart.
          </p>
          <div className="mt-8">
            <TuberList />
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-[var(--bfl-card-border)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-12">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
            {stockImages.footerGallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/30 shadow-sm ring-1 ring-black/[0.04]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, 200px"
                />
              </div>
            ))}
          </div>
          <nav
            aria-label="Footer links"
            className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-sm font-medium sm:gap-x-2"
          >
            <ExternalLink
              href={siteConfig.links.relayUrl}
              className="inline-flex min-h-10 items-center rounded-md px-3 text-[var(--bfl-accent)] underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
            >
              Relay
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.fundraisingUrl}
              className="inline-flex min-h-10 items-center rounded-md px-3 text-[var(--bfl-accent)] underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
            >
              ACS fundraising
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.facebookGroupUrl}
              className="inline-flex min-h-10 items-center rounded-md px-3 text-[var(--bfl-accent)] underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
            >
              Facebook
            </ExternalLink>
            <ExternalLink
              href={siteConfig.links.instagramUrl}
              className="inline-flex min-h-10 items-center rounded-md px-3 text-[var(--bfl-accent)] underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
            >
              Instagram
            </ExternalLink>
            <a
              href={mailto}
              className="inline-flex min-h-10 items-center rounded-md px-3 text-[var(--bfl-accent)] underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)]"
            >
              Email
            </a>
          </nav>
          <p className="text-center text-sm leading-relaxed text-[var(--bfl-muted)]">
            {siteConfig.hashtags.join(" ")}
          </p>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-[var(--bfl-muted)]">
            This site does not process donations or tuber payments — it links to official
            American Cancer Society and Relay For Life pages and team contact.
          </p>
        </div>
      </footer>
    </div>
  );
}
