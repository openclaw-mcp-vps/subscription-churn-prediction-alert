import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard — Predict & Prevent Subscription Cancellations",
  description: "Analyzes usage patterns to predict subscription cancellations and trigger retention campaigns for SaaS founders and customer success teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="babda3c6-4d78-4f26-87f2-ce0bf0e9206f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
