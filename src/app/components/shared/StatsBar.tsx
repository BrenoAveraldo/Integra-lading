import { useEffect, useRef, useState } from "react";

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  dark?: boolean;
}

function useCountUp(target: number, active: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, durationMs]);
  return value;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean; dark?: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 900,
          color: "#C8102E",
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <div style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, opacity: 0.8, fontFamily: "'Open Sans', sans-serif" }}>
        {stat.label}
      </div>
    </div>
  );
}

// Faixa de números institucionais com contagem animada quando entra em tela.
// Os valores abaixo são referência — troque pelos números reais da Integra
// (anos de atuação, veículos entregues, municípios/clientes atendidos, etc.).
export function StatsBar({ stats, dark = false }: StatsBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: dark ? "#1a1a1a" : "#fff",
        color: dark ? "#fff" : "#1a1a1a",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`,
        gap: 32,
        padding: dark ? "56px 24px" : "0",
      }}
    >
      {stats.map((s) => (
        <StatItem key={s.label} stat={s} active={active} dark={dark} />
      ))}
    </div>
  );
}
