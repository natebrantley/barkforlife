/**
 * Central content and URLs — Bark for Life (Clark County, WA)
 *
 * Bark for Life is a dog-themed Relay For Life / American Cancer Society
 * fundraiser. This site promotes a team member’s one-day dahlia tuber sale
 * (awareness + flowers) alongside the main walk and ways to help.
 */
export const siteConfig = {
  siteName: "Bark for Life — Clark County, WA",
  /** Short line under the site name in the header (mobile/desktop) */
  siteTagline: "Dogs, dahlias & hope — fundraising for the American Cancer Society",
  story: {
    mission:
      "Bark for Life is a Relay For Life event rooted in love for dogs: we celebrate our canine companions while raising money for the American Cancer Society—research, patient programs, and support in communities like ours.",
    dahliaSale:
      "A Bark for Life team member is hosting this special one-day dahlia tuber sale to spread the word and sell beautiful tubers. All but one dollar from each tuber goes to charity. Think cute pups, stunning blooms, and neighbors showing up for each other.",
  },
  tuberSale: {
    headline: "CANCER BENEFIT SALE",
    /** Short line under the main title */
    subtitle: "One-day dahlia tuber sale · Vancouver, WA",
    dateLabel: "April 4, 2026",
    shortDate: "4/4/26",
    time: "11am–3pm",
    addressLine1: "5100 NE 75th Circle",
    cityStateZip: "Vancouver, WA 98661",
    presentedBy: "Bark for Life Team",
    organizer: "Barbara Harmon",
    charityLine:
      "All but $1 from each tuber sale goes to charity. Tubers are paid for in person at the sale—not on this website.",
  },
  mainWalk: {
    title: "Bark for Life walk",
    tagline: "Unleash the Cure!",
    dateLabel: "August 15, 2026",
    time: "9am–1pm",
    route: "Marine Park to Wintler Park",
    options: [
      "1.5 mile route",
      "3 mile route",
      "Or walk around the park",
    ] as const,
    blurb:
      "Music and entertainment, food and beverage vendors, kids zone with bounce house, photobooth, pup cups, dog treats and contests, vendors for gear and collars/leashes, and canine medical, service, and training information.",
  },
  contribute: {
    financialTitle: "Donate financially",
    financialBody:
      "Make a secure donation through the American Cancer Society or Relay For Life team pages. You will leave this website to complete your gift.",
    timeTitle: "Volunteer your time",
    timeBody:
      "Reach out by email or join the Facebook group to ask how you can help before and during events.",
  },
  links: {
    fundraisingUrl:
      "https://secure.acsevents.org/site/TR/ACTIVEFundraising/BFLCY26NOR?pg=entry&fr_id=112266",
    relayUrl: "https://relayforlife.org/bflclarkcountywa",
    facebookGroupUrl: "https://www.facebook.com/groups/bflclarkcountywa/",
    instagramUrl: "https://www.instagram.com/bark4lifeclarkco/",
    teamEmail: "bark4lifeclarkco@yahoo.com",
  },
  hashtags: [
    "#barkforlife",
    "#cancer",
    "#vancouvergardens",
    "#relayforlife",
    "#dahlias",
  ] as const,
  /** Used in layout metadata and Open Graph */
  metaDescription:
    "One-day dahlia tuber sale April 4, 2026 in Vancouver, WA — Bark for Life & American Cancer Society. Cute dogs, beautiful dahlias, and all but $1 per tuber to charity.",
} as const;

export function getPublicSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url?.startsWith("http")) return url.replace(/\/$/, "");
  return "https://barkforlife.vercel.app";
}
