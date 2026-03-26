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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className="border-b border-[var(--bfl-card-border)] bg-white/90 backdrop-blur-md">
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
          id="story"
          className="scroll-mt-24 rounded-3xl border border-[var(--bfl-card-border)] bg-white/80 p-6 shadow-md sm:p-10"
          aria-labelledby="story-heading"
        >
          <h2
            id="story-heading"
            className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--bfl-ink)] sm:text-2xl"
          >
            Why we&apos;re here
          </h2>
          <p className="mt-4 text-[var(--bfl-muted)]">{siteConfig.story.mission}</p>
          <p className="mt-4 text-[var(--bfl-ink)]">{siteConfig.story.dahliaSale}</p>
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
              <div className="border-t border-[var(--bfl-card-border)]/60 pt-3 sm:col-span-2 sm:border-t-0 sm:pt-0">
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--bfl-muted)]">
                  Organizer
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--bfl-ink)]">
                  {siteConfig.tuberSale.organizer}
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl border-l-4 border-[var(--bfl-accent)] bg-white/85 py-4 pl-5 pr-4 shadow-sm">
              <p className="text-[0.95rem] leading-relaxed text-[var(--bfl-ink)]">
                {siteConfig.tuberSale.charityLine}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#tubers"
                className="inline-flex min-h-[48px] min-w-[10rem] flex-1 items-center justify-center rounded-full bg-[var(--bfl-accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--bfl-accent-hover)] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] sm:flex-initial"
              >
                View tuber list
              </a>
              <ExternalLink
                href={siteConfig.links.relayUrl}
                className="inline-flex min-h-[48px] min-w-[10rem] flex-1 items-center justify-center rounded-full border-2 border-[var(--bfl-accent)] bg-white/90 px-6 py-3 text-sm font-semibold text-[var(--bfl-accent)] shadow-sm transition hover:border-[var(--bfl-accent-hover)] hover:bg-[var(--bfl-purple)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bfl-accent)] sm:flex-initial"
              >
                Relay team site
              </ExternalLink>
            </div>
          </div>
        </section>

        <section
          id="walk"
          className="rounded-3xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/50 p-6 shadow-md sm:p-10"
        >
          <SectionStockPhoto
            src={stockImages.mainWalk.src}
            alt={stockImages.mainWalk.alt}
            className="mb-6"
          />
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

        <section id="contribute" className="flex flex-col gap-6">
          <SectionStockPhoto
            src={stockImages.contribute.src}
            alt={stockImages.contribute.alt}
          />
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>
        </section>

        <section id="tubers" className="scroll-mt-24">
          <div
            className={`mb-6 grid gap-4 ${dahliaPhotos.tuberList ? "md:grid-cols-2" : ""}`}
          >
            <SectionStockPhoto
              src={stockImages.tuberList.src}
              alt={stockImages.tuberList.alt}
            />
            {dahliaPhotos.tuberList ? (
              <SectionStockPhoto
                src={dahliaPhotos.tuberList.src}
                alt={dahliaPhotos.tuberList.alt}
              />
            ) : null}
          </div>
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
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stockImages.footerGallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/30"
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
          <p className="text-center text-xs text-[var(--bfl-muted)] sm:text-left">
            Photos: licensed stock photography. Dogs live in{" "}
            <code className="rounded bg-[var(--bfl-purple)]/50 px-1 py-0.5 text-[11px]">
              public/img/dogs
            </code>
            , dahlias in{" "}
            <code className="rounded bg-[var(--bfl-purple)]/50 px-1 py-0.5 text-[11px]">
              public/img/dahlias
            </code>
            ; paths are mapped in{" "}
            <code className="rounded bg-[var(--bfl-purple)]/50 px-1 py-0.5 text-[11px]">
              src/data/stock-images.ts
            </code>
            .
          </p>
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
