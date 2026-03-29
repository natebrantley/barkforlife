import { tuberCount, tubers } from "@/data/tubers";

export function TuberList() {
  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-2xl border border-[var(--bfl-card-border)] bg-white/95 shadow-md ring-1 ring-black/[0.03]">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm sm:text-[0.9375rem]">
          <caption className="sr-only">
            Dahlia tuber varieties and abbreviations — {tuberCount} varieties
          </caption>
          <thead className="sticky top-[5.5rem] z-30 border-b border-[var(--bfl-card-border)] bg-[var(--bfl-purple)]/95 shadow-[0_1px_0_var(--bfl-card-border)] backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--bfl-purple)]/90">
            <tr>
              <th
                scope="col"
                className="px-4 py-3.5 font-[family-name:var(--font-display)] font-semibold text-[var(--bfl-ink)] sm:px-5"
              >
                Variety
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 font-[family-name:var(--font-display)] font-semibold text-[var(--bfl-ink)] sm:px-5"
              >
                Abbreviation (on tuber)
              </th>
            </tr>
          </thead>
          <tbody>
            {tubers.map((t) => (
              <tr
                key={`${t.name}-${t.abbreviation}`}
                className="border-t border-[var(--bfl-card-border)]/80 odd:bg-white/70 even:bg-[var(--bfl-accent-soft)]/80 transition-colors hover:bg-[var(--bfl-purple)]/50"
              >
                <td className="px-4 py-2.5 font-medium leading-snug text-[var(--bfl-ink)] sm:px-5 sm:py-3">
                  {t.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2.5 font-mono text-[var(--bfl-ink)] sm:px-5 sm:py-3">
                  {t.abbreviation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
