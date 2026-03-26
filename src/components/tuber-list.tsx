import { tubers } from "@/data/tubers";

export function TuberList() {
  return (
    <div className="w-full">
      <ul className="grid gap-2 md:hidden">
        {tubers.map((t) => (
          <li
            key={`${t.name}-${t.abbreviation}`}
            className="rounded-2xl border border-[var(--bfl-card-border)] bg-white/80 px-4 py-3 shadow-sm"
          >
            <div className="font-medium text-[var(--bfl-ink)]">{t.name}</div>
            <div className="text-sm text-[var(--bfl-muted)]">
              Abbreviation:{" "}
              <span className="font-mono text-[var(--bfl-ink)]">
                {t.abbreviation}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto rounded-2xl border border-[var(--bfl-card-border)] bg-white/90 shadow-sm md:block">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead className="sticky top-0 z-10 bg-[var(--bfl-blue)]/90 backdrop-blur">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--bfl-ink)]">
                Variety
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--bfl-ink)]">
                Abbreviation (on tuber)
              </th>
            </tr>
          </thead>
          <tbody>
            {tubers.map((t) => (
              <tr
                key={`${t.name}-${t.abbreviation}`}
                className="border-t border-[var(--bfl-card-border)] odd:bg-white/60 even:bg-[var(--bfl-pink)]/30"
              >
                <td className="px-4 py-2.5 text-[var(--bfl-ink)]">{t.name}</td>
                <td className="px-4 py-2.5 font-mono text-[var(--bfl-ink)]">
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
