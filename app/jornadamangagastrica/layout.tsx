import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jornada de Manga Gástrica | Serenity Surgery Planner",
  description:
    "Manga Gástrica en Puebla, México. Cirugía bariátrica con el Dr. Edgar Serrano García. De $85,000 a $69,000 MXN. Incluye hospitalización, valoraciones y seguimiento.",
};

export default function JornadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="jornada-manga">{children}</div>;
}
