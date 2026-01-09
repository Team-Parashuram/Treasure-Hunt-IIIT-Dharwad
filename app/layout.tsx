import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Darker_Grotesque, Inter, Kalam } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme/theme";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DarkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

// Viewport configuration (Next.js 14+ best practice)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ff8c00" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://treasure-hunt.mishrashardendu22.is-a.dev'),
  title: {
    default: "Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure",
    template: "%s | Kya Tumhe Naukri Milegi?",
  },
  description:
    "Embark on an epic treasure hunt through tech-themed challenges and puzzles. Test your hacking skills, solve riddles, bypass HR gates, and prove you deserve the job. Are you ready for the ultimate job hunting adventure?",
  keywords: [
    "Treasure Hunt",
    "Tech Odyssey",
    "Coding Challenges",
    "Puzzles",
    "Riddles",
    "Technology",
    "Programming",
    "Adventure",
    "Problem Solving",
    "Tech Games",
    "Naukri",
    "Job Portal",
    "Career",
    "Hiring",
    "Recruitment",
    "Job Search",
    "Job Opportunities",
    "Job Interviews",
    "Job Applications",
    "Tech Careers",
    "Tech Jobs",
    "IT Careers",
    "Software Development",
    "Tech Industry",
    "Tech Talent",
    "Tech Recruitment",
    "Tech Hiring",
    "kya-naukri-milegi-tumhe",
    "Hacker Challenge",
    "Coding Games",
    "Tech Puzzle Hunt",
    "Interactive Job Hunt",
  ],
  authors: [{ name: "Team Parashuram", url: "https://github.com/Team-Parashuram" }],
  creator: "Team Parashuram",
  publisher: "Team Parashuram",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://treasure-hunt.mishrashardendu22.is-a.dev/",
    title: "Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure",
    description:
      "Embark on an epic treasure hunt through tech-themed challenges and puzzles. Test your hacking skills, solve riddles, bypass HR gates, and prove you deserve the job!",
    siteName: "Kya Tumhe Naukri Milegi?",
    images: [
      {
        url: "/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp",
        width: 600,
        height: 340,
        alt: "Kya Tumhe Naukri Milegi? - Job Hunt Treasure Challenge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure",
    description:
      "Test your hacking skills in this epic treasure hunt! Solve riddles, bypass HR gates, and prove you deserve the job. Are you ready?",
    images: ["/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp"],
    creator: "@TeamParashuram",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon-512x512.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Naukri Milegi?",
    startupImage: "/icon-512x512.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#ff8c00",
    "msapplication-config": "/browserconfig.xml",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kya Tumhe Naukri Milegi?",
    description: "The ultimate job hunting treasure hunt adventure with tech challenges and puzzles",
    url: "https://treasure-hunt.mishrashardendu22.is-a.dev/",
    author: {
      "@type": "Organization",
      name: "Team Parashuram",
      url: "https://github.com/Team-Parashuram",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://treasure-hunt.mishrashardendu22.is-a.dev/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style>{`
          :root {
            --font-press-start: 'Press Start 2P', monospace;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${DarkerGrotesque.variable} ${inter.variable} ${kalam.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
