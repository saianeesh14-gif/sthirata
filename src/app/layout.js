import "./globals.css";

export const metadata = {
  title: {
    default: "STHIRATA CONCEPTS & DESIGNS | Architecture & Interior Design",
    template: "%s | STHIRATA CONCEPTS & DESIGNS",
  },
  description:
    "STHIRATA CONCEPTS & DESIGNS is an architectural and interior design practice rooted in balance, context, and enduring simplicity. Crafting residential, commercial, and public spaces.",
  keywords: [
    "Architecture",
    "Interior Design",
    "Contemporary Architecture",
    "Sthirata Concepts and Designs",
    "Sustainable Architecture",
    "Tropical Architecture",
    "Minimalist Interior Design",
  ],
  authors: [{ name: "STHIRATA CONCEPTS & DESIGNS" }],
  creator: "STHIRATA CONCEPTS & DESIGNS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sthirata.wixstudio.com/website",
    siteName: "STHIRATA CONCEPTS & DESIGNS",
    title: "STHIRATA CONCEPTS & DESIGNS | Architecture Rooted in Balance",
    description:
      "Architecture and interior design practice crafting calm, enduring spaces grounded in context, material honesty, and sustainability.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-[#F5F3EE] text-[#242521] selection:bg-[#777B63] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
