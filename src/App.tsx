import { useState, useRef, useEffect } from "react";

const TRAILS = [
  {
    id: "1",
    name: "Client A — Proposal",
    date: "Aug 19",
    confidence: 94,
    active: "3 days running",
    lastActive: "today",
    items: [
      { type: "figma", label: "Proposal_v4.fig" },
      { type: "doc", label: "Scope of Work.docx" },
      { type: "tab", label: "dribbble.com/search/brand" },
      { type: "tab", label: "Linear — ClientA board" },
    ],
    excerpt:
      "Active across 5 items over 6 days. Most activity clusters around the proposal doc and Figma deck — iterating on pricing framing. Client notes have the most recent writes.",
  },
  {
    id: "2",
    name: "Trail — Query Surface",
    date: "Aug 20",
    confidence: 88,
    active: "1 day running",
    lastActive: "2h ago",
    items: [
      { type: "code", label: "App.tsx" },
      { type: "code", label: "index.css" },
      { type: "tab", label: "fonts.google.com" },
      { type: "tab", label: "Tailwind v4 docs" },
    ],
    excerpt:
      "High capture density — VS Code and 3 browser tabs tightly clustered. App.tsx and index.css account for most writes.",
  },
  {
    id: "3",
    name: "Tax & Finance — 2025",
    date: "Jul 30",
    confidence: 61,
    active: "dormant",
    lastActive: "3 wks ago",
    items: [
      { type: "pdf", label: "Assessment_2025.pdf" },
      { type: "tab", label: "HMRC — Self Assessment" },
      { type: "doc", label: "Expenses_Q3.xlsx" },
    ],
    excerpt:
      "No captures in 21 days. Fading — will decay unless activity resumes. Assessment PDF was the last touched file.",
  },
  {
    id: "4",
    name: "Reading — AI Systems",
    date: "Aug 19",
    confidence: 77,
    active: "2 days running",
    lastActive: "yesterday",
    items: [
      { type: "tab", label: "Attention Is All You Need" },
      { type: "tab", label: "Andrej Karpathy — YouTube" },
      { type: "doc", label: "Notes — Transformers.md" },
    ],
    excerpt:
      "Browser-heavy Trail. 6 tabs clustered with no local files. Notes doc had 3 write sessions — active synthesis.",
  },
];

type Trail = typeof TRAILS[number];
type Theme = "dark" | "light";

const FILE_ICON: Record<string, string> = {
  figma: "◈", doc: "□", tab: "⌗", code: "⟨⟩", pdf: "▤",
};

const fv = { fontVariationSettings: '"opsz" 14' } as const;

const T = {
  dark: {
    panel: "#16161b",
    panelShadow: "0px 32px 80px rgba(0,0,0,0.72), 0px 0px 0px 0.8px rgba(255,255,255,0.07)",
    divider: "rgba(255,255,255,0.06)",
    searchIcon: "#3a3a44",
    searchFg: "#f0f0f2",
    searchPlaceholder: "#3a3a44",
    avatarBg: "#1e1e24",
    avatarBorder: "rgba(255,255,255,0.08)",
    label: "#333",
    cardBg: "rgba(255,255,255,0.03)",
    cardBorder: "rgba(255,255,255,0.07)",
    cardHover: "rgba(255,255,255,0.05)",
    nameFg: "#f0f0f2",
    subFg: "#555",
    dateFg: "#3a3a44",
    chipBg: "rgba(255,255,255,0.06)",
    chipBorder: "rgba(255,255,255,0.08)",
    chipIcon: "#444",
    chipLabel: "#777",
    rowBg: "transparent",
    rowHover: "rgba(255,255,255,0.02)",
    rowSelected: "rgba(187,247,208,0.05)",
    rowSelDot: "#4ade80",
    rowFg: "#aaa",
    rowFgSel: "#f0f0f2",
    dotHigh: "#4ade80",
    dotMid: "#facc15",
    dotLow: "#3a3a44",
    kbdBorder: "rgba(255,255,255,0.08)",
    footerFg: "#333",
    detailSub: "#3a3a44",
    detailExcerpt: "#666",
    trayBg: "rgba(255,255,255,0.06)",
    reviveFg: "#555",
    contextBg: "#f0f0f2",
    contextFg: "#111",
    closeFg: "#3a3a44",
  },
  light: {
    panel: "#ffffff",
    panelShadow: "0px 8px 40px rgba(0,0,0,0.09), 0px 0px 0px 0.8px rgba(0,0,0,0.06)",
    divider: "#f0f0f0",
    searchIcon: "#ccc",
    searchFg: "#111",
    searchPlaceholder: "#ccc",
    avatarBg: "#f0f0f0",
    avatarBorder: "#e8e8e8",
    label: "#bbb",
    cardBg: "#fafafa",
    cardBorder: "#ebebeb",
    cardHover: "#f5f5f5",
    nameFg: "#111",
    subFg: "#888",
    dateFg: "#ccc",
    chipBg: "#f5f5f5",
    chipBorder: "#ebebeb",
    chipIcon: "#ccc",
    chipLabel: "#555",
    rowBg: "transparent",
    rowHover: "#fafafa",
    rowSelected: "rgba(74,222,128,0.06)",
    rowSelDot: "#16a34a",
    rowFg: "#999",
    rowFgSel: "#111",
    dotHigh: "#16a34a",
    dotMid: "#d97706",
    dotLow: "#ddd",
    kbdBorder: "#e5e5e5",
    footerFg: "#ccc",
    detailSub: "#bbb",
    detailExcerpt: "#888",
    trayBg: "#f5f5f5",
    reviveFg: "#ababab",
    contextBg: "#111",
    contextFg: "#fff",
    closeFg: "#ccc",
  },
} as const;

const dot = (score: number, t: typeof T.dark) =>
  score >= 85 ? t.dotHigh : score >= 65 ? t.dotMid : t.dotLow;

function ItemChip({ type, label, t }: { type: string; label: string; t: typeof T.dark }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full shrink-0 whitespace-nowrap"
      style={{ background: t.chipBg, border: `0.8px solid ${t.chipBorder}` }}
    >
      <span style={{ fontSize: 10, color: t.chipIcon, lineHeight: 1 }}>{FILE_ICON[type] ?? "•"}</span>
      <span style={{ fontSize: 11, fontWeight: 500, color: t.chipLabel, ...fv }}>{label}</span>
    </span>
  );
}

function SurfaceCard({ trail, t, onClick }: { trail: Trail; t: typeof T.dark; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full text-left rounded-[16px] p-4 flex flex-col gap-2.5 transition-colors duration-100"
      style={{
        background: hovered ? t.cardHover : t.cardBg,
        border: `0.8px solid ${t.cardBorder}`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p style={{ fontSize: 13.5, fontWeight: 600, color: t.nameFg, ...fv }}>{trail.name}</p>
          <p style={{ fontSize: 11.5, fontWeight: 400, color: t.subFg, marginTop: 1, ...fv }}>
            has been active {trail.active}
          </p>
        </div>
        <span
          className="rounded-full shrink-0 mt-0.5"
          style={{ width: 8, height: 8, background: dot(trail.confidence, t), boxShadow: `0 0 5px ${dot(trail.confidence, t)}88`, marginTop: 4 }}
        />
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {trail.items.slice(0, 3).map((item, i) => (
          <ItemChip key={i} type={item.type} label={item.label} t={t} />
        ))}
        {trail.items.length > 3 && (
          <span style={{ fontSize: 11, color: t.dateFg, alignSelf: "center", ...fv }}>
            +{trail.items.length - 3}
          </span>
        )}
      </div>
    </button>
  );
}

function TrailRow({
  trail, selected, t, onClick,
}: {
  trail: Trail; selected: boolean; t: typeof T.dark; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-5 py-3 flex items-center justify-between gap-4 transition-colors duration-100 border-b last:border-0"
      style={{
        borderColor: t.divider,
        background: selected ? t.rowSelected : t.rowBg,
      }}
      onMouseEnter={e => { if (!selected) (e.currentTarget as HTMLElement).style.background = t.rowHover; }}
      onMouseLeave={e => { if (!selected) (e.currentTarget as HTMLElement).style.background = t.rowBg; }}
    >
      <div className="flex items-center gap-2 min-w-0">
        {selected
          ? <span className="rounded-full shrink-0" style={{ width: 4, height: 4, background: t.rowSelDot }} />
          : <span className="rounded-full shrink-0" style={{ width: 4, height: 4, background: dot(trail.confidence, t), opacity: 0.5 }} />
        }
        <span
          className="truncate"
          style={{ fontSize: 13, fontWeight: selected ? 600 : 500, color: selected ? t.rowFgSel : t.rowFg, ...fv }}
        >
          {trail.name}
        </span>
      </div>
      <span style={{ fontSize: 11, fontWeight: 400, color: t.dateFg, flexShrink: 0, ...fv }}>
        {trail.lastActive}
      </span>
    </button>
  );
}

function DetailView({ trail, t, onClose }: { trail: Trail; t: typeof T.dark; onClose: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-3 border-b" style={{ borderColor: t.divider }}>
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="rounded-full" style={{ width: 6, height: 6, background: dot(trail.confidence, t), boxShadow: `0 0 5px ${dot(trail.confidence, t)}88` }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: t.detailSub, ...fv }}>
              Trail · {trail.active}
            </span>
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: t.nameFg, lineHeight: "24px", ...fv }}>
            {trail.name}
          </h2>
          <p style={{ fontSize: 11, fontWeight: 400, color: t.detailSub, marginTop: 3, ...fv }}>
            Trail since {trail.date} · auto-logged {trail.lastActive}
          </p>
        </div>
        <button onClick={onClose} style={{ fontSize: 20, lineHeight: 1, color: t.closeFg, marginTop: 2 }}
          className="shrink-0 transition-colors hover:opacity-70">×</button>
      </div>

      {/* Items */}
      <div className="px-5 py-4 border-b" style={{ borderColor: t.divider }}>
        <p style={{ fontSize: 10, fontWeight: 500, color: t.detailSub, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, ...fv }}>
          Captured items
        </p>
        <div className="flex flex-wrap gap-1.5">
          {trail.items.map((item, i) => (
            <ItemChip key={i} type={item.type} label={item.label} t={t} />
          ))}
        </div>
      </div>

      {/* Excerpt */}
      <div className="px-5 py-4 flex-1">
        <p style={{ fontSize: 10, fontWeight: 500, color: t.detailSub, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8, ...fv }}>
          Context
        </p>
        <p style={{ fontSize: 13, fontWeight: 400, color: t.detailExcerpt, lineHeight: "21px", ...fv }}>
          {trail.excerpt}
        </p>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4">
        <div className="flex h-[47px] p-[3px] rounded-[15px]" style={{ background: t.trayBg }}>
          <button
            className="flex-1 rounded-[12px]"
            style={{ fontSize: 13, fontWeight: 500, color: t.reviveFg, ...fv }}
          >
            Revive workspace
          </button>
          <button
            className="flex-1 rounded-[12px] transition-opacity hover:opacity-90"
            style={{ background: t.contextBg, color: t.contextFg, fontSize: 13, fontWeight: 600, boxShadow: "0px 1px 3px rgba(0,0,0,0.15)", ...fv }}
          >
            Contextualise
          </button>
        </div>
      </div>
    </div>
  );
}

function QueryPanel({ theme }: { theme: Theme }) {
  const t = T[theme];
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detail, setDetail] = useState<Trail | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filtered = query.trim()
    ? TRAILS.filter(tr =>
        tr.name.toLowerCase().includes(query.toLowerCase()) ||
        tr.items.some(i => i.label.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleKey = (e: React.KeyboardEvent) => {
    const list = query.trim() ? filtered : TRAILS;
    const ids = list.map(tr => tr.id);
    const idx = selectedId ? ids.indexOf(selectedId) : -1;
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedId(ids[Math.min(idx + 1, ids.length - 1)]); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedId(ids[Math.max(idx - 1, 0)]); }
    else if (e.key === "Enter" && selectedId) { const tr = TRAILS.find(tr => tr.id === selectedId); if (tr) setDetail(tr); }
    else if (e.key === "Escape") { if (detail) setDetail(null); else { setQuery(""); setSelectedId(null); } }
  };

  return (
    <div
      className="w-full rounded-[24px] overflow-hidden"
      style={{ background: t.panel, boxShadow: t.panelShadow }}
    >
      {detail ? (
        <div style={{ minHeight: 420 }}>
          <DetailView trail={detail} t={t} onClose={() => setDetail(null)} />
        </div>
      ) : (
        <>
          {/* Search */}
          <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: t.divider }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: t.searchIcon, flexShrink: 0 }}>
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M9.5 9.5L12.5 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={e => { setQuery(e.target.value); setSelectedId(null); }}
              onKeyDown={handleKey}
              placeholder="Search Trails, files, tabs…"
              className="flex-1 bg-transparent outline-none"
              style={{ fontSize: 14, fontWeight: 400, color: t.searchFg, fontFamily: "inherit", ...fv }}
            />
            {query ? (
              <button onClick={() => { setQuery(""); setSelectedId(null); }} style={{ fontSize: 18, lineHeight: 1, color: t.searchIcon }}>×</button>
            ) : (
              <div className="rounded-full shrink-0" style={{ width: 28, height: 28, background: t.avatarBg, border: `0.8px solid ${t.avatarBorder}` }} />
            )}
          </div>

          {/* Body */}
          {!query.trim() ? (
            <div>
              <p className="px-5 pt-4 pb-2.5" style={{ fontSize: 10, fontWeight: 500, color: t.label, textTransform: "uppercase", letterSpacing: "0.07em", ...fv }}>
                Proactive resurfacing
              </p>
              <div className="px-4 pb-2 flex flex-col gap-2">
                {TRAILS.slice(0, 2).map(tr => (
                  <SurfaceCard key={tr.id} trail={tr} t={t} onClick={() => setDetail(tr)} />
                ))}
              </div>
              <p className="px-5 pt-3 pb-1" style={{ fontSize: 10, fontWeight: 500, color: t.label, textTransform: "uppercase", letterSpacing: "0.07em", ...fv }}>
                All Trails
              </p>
              {TRAILS.slice(2).map(tr => (
                <TrailRow key={tr.id} trail={tr} selected={selectedId === tr.id} t={t} onClick={() => setDetail(tr)} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-10 text-center" style={{ fontSize: 13, color: t.dateFg, ...fv }}>
              No Trails match "{query}"
            </div>
          ) : (
            <div>
              <p className="px-5 pt-4 pb-1" style={{ fontSize: 10, fontWeight: 500, color: t.label, textTransform: "uppercase", letterSpacing: "0.07em", ...fv }}>
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </p>
              {filtered.map(tr => (
                <TrailRow key={tr.id} trail={tr} selected={selectedId === tr.id} t={t} onClick={() => setDetail(tr)} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="px-5 py-3 border-t flex items-center gap-4" style={{ borderColor: t.divider }}>
            {[["↑↓", "navigate"], ["↵", "open"], ["esc", "clear"]].map(([key, label]) => (
              <span key={key} className="flex items-center gap-1.5" style={{ fontSize: 11, fontWeight: 400, color: t.footerFg, ...fv }}>
                <kbd style={{ border: `0.8px solid ${t.kbdBorder}`, borderRadius: 4, padding: "1px 5px", fontFamily: "inherit", fontSize: 10 }}>
                  {key}
                </kbd>
                {label}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1.5" style={{ fontSize: 11, fontWeight: 500, color: t.dotHigh, opacity: 0.4, ...fv }}>
              <span className="rounded-full" style={{ width: 5, height: 5, background: t.dotHigh }} />
              tray active
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-10 p-10" style={{ background: "#111" }}>
      <div className="flex flex-col gap-3 w-[420px]">
        <p style={{ fontSize: 10, fontWeight: 500, color: "#2a2a2a", textTransform: "uppercase", letterSpacing: "0.08em", ...fv }}>Dark</p>
        <QueryPanel theme="dark" />
      </div>
      <div className="flex flex-col gap-3 w-[420px]">
        <p style={{ fontSize: 10, fontWeight: 500, color: "#2a2a2a", textTransform: "uppercase", letterSpacing: "0.08em", ...fv }}>Light</p>
        <QueryPanel theme="light" />
      </div>
    </div>
  );
}
