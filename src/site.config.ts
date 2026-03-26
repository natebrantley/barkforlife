/**
 * Central content and URLs — Bark for Life (Clark County, WA)
 */
export const siteConfig = {
  siteName: "Bark for Life — Clark County, WA",
  tuberSale: {
    headline: "CANCER BENEFIT SALE",
    dateLabel: "April 4, 2026",
    shortDate: "4/4/26",
    time: "11am–3pm",
    addressLine1: "5100 NE 75th Circle",
    cityStateZip: "Vancouver, WA 98661",
    presentedBy: "Bark for Life Team",
    organizer: "Barbara Harmon",
    charityLine:
      "All but $1 from each tuber sale goes to charity. Payment for tubers is in person at the sale — not on this website.",
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
  hashtags: ["#barkforlife", "#cancer", "#vancouvergardens", "#relayforlife"] as const,
} as const;

export function getPublicSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url?.startsWith("http")) return url.replace(/\/$/, "");
  return "https://barkforlife.vercel.app";
}
