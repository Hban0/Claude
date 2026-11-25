import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "ADA — Play your game", description: "ADA, plateforme de démonstration sport et gaming avec crédits fictifs." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
