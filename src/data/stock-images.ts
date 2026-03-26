/**
 * Stock photography under `/public/img/`:
 * - `dogs/` — Bark for Life–themed dog photos (Adobe Stock; keep license on file).
 * - `dahlias/` — flower shots for the dahlia tuber sale (optional extras in folder for future use).
 */
export type StockPhoto = { src: string; alt: string };

export const stockImages = {
  tuberSale: {
    src: "/img/dogs/AdobeStock_108062461.jpeg",
    alt: "Dog with people outdoors — Bark for Life is a dog-themed American Cancer Society fundraiser",
  },
  mainWalk: {
    src: "/img/dogs/AdobeStock_121096965.jpeg",
    alt: "Dogs and walkers on a path — community Bark for Life event",
  },
  contribute: {
    src: "/img/dogs/AdobeStock_185266740.jpeg",
    alt: "Friendly dog at an outdoor gathering with volunteers",
  },
  tuberList: {
    src: "/img/dogs/AdobeStock_221739027.jpeg",
    alt: "Dog outdoors — team spirit for Relay and Bark for Life",
  },
  footerGallery: [
    {
      src: "/img/dogs/AdobeStock_250628313.jpeg",
      alt: "Dog enjoying time outside with people nearby",
    },
    {
      src: "/img/dogs/AdobeStock_266921676.jpeg",
      alt: "People walking with dogs in a park",
    },
    {
      src: "/img/dogs/AdobeStock_299341611.jpeg",
      alt: "Happy dog outdoors in natural light",
    },
    {
      src: "/img/dogs/AdobeStock_309598560.jpeg",
      alt: "Community event with dogs and participants",
    },
  ],
} as const;

/**
 * Dahlia blooms next to dog photos in the tuber sale and tuber list sections.
 * More files live in `public/img/dahlias/` if you want to swap `src` values.
 */
export const dahliaPhotos: Partial<Record<"tuberSale" | "tuberList", StockPhoto>> = {
  tuberSale: {
    src: "/img/dahlias/AdobeStock_154915679.jpeg",
    alt: "Colorful dahlia flowers in full bloom",
  },
  tuberList: {
    src: "/img/dahlias/AdobeStock_219226845.jpeg",
    alt: "Dahlia blooms — varieties available as tubers at the sale",
  },
};
