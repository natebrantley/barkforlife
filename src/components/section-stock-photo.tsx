import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function SectionStockPhoto({
  src,
  alt,
  priority = false,
  className = "",
}: Props) {
  return (
    <figure
      className={`relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/40 shadow-sm sm:aspect-[21/9] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 896px) 100vw, 896px"
        priority={priority}
      />
    </figure>
  );
}
