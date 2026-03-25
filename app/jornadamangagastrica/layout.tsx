import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jornada de Manga Gástrica | Serenity Surgery Planner",
  description:
    "Manga Gástrica en Puebla, México. Cirugía bariátrica, Dr. Edgar Serrano García, bariatría",
  logo: "/logo.png",
};

export default function JornadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="jornada-manga">{children}</div>;
}
