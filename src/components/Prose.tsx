export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} className="heading-display pt-6 text-[28px] font-bold text-[#0a0a0a] sm:text-[34px]">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-4 text-[21px] font-bold text-[#0a0a0a]">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] leading-[1.7] text-[#3b3b3b]">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-[17px] leading-[1.6] text-[#3b3b3b]">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-ww-accent-blue" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-ww-accent-blue pl-5 text-[19px] font-medium italic leading-[1.5] text-[#1c1c1c]">
                {b.text}
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-hairline">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="bg-surface-alt">
                      {b.head.map((h) => (
                        <th key={h} className="p-3 font-bold text-[#0a0a0a] sm:p-4">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-t border-hairline align-top">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={
                              "p-3 sm:p-4 " +
                              (c === 0 ? "font-semibold text-[#1c1c1c]" : "text-[#5b5b5b]")
                            }
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
