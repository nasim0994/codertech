import "./globals.css";
import Providers from "@/providers/Providers";



export const metadata = {
    title: {
        default: "CoderTech | Best Software Company in Bangladesh",
        template: "%s | CoderTech",
    },
    description:
        "CoderTech is the best software company in Bangladesh providing web development, mobile app development, digital marketing, and complete IT solutions for your business growth.",
    keywords: [
        "CoderTech",
        "Best Software Company in Bangladesh",
        "Best Digital Marketing Company in Bangladesh",
        "Best Digital Marketing Agency in Bangladesh",
        "Best Software Company",
        "Best Digital Marketing Company",
        "Best Digital Marketing Agency",
        "Web Development",
        "Mobile App Development",
        "Digital Marketing",
        "UI/UX Design",
        "Software Development Company",
        "IT Solutions Bangladesh",
        "SEO Company Bangladesh",
    ],
    authors: [{ name: "CoderTech", url: "https://codertechltd.com" }],
    creator: "CoderTech Team",
    publisher: "CoderTech",
    metadataBase: new URL("https://codertechltd.com"),
    alternates: {
        canonical: "https://codertechltd.com",
    },
    openGraph: {
        title: "CoderTech | Best Software Company in Bangladesh",
        description:
            "We help businesses grow with modern software, web, and marketing solutions. Partner with CoderTech for your digital transformation.",
        url: "https://codertechltd.com",
        siteName: "CoderTech",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "CoderTech - Best Software Company in Bangladesh",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CoderTech | Best Software Company in Bangladesh",
        description:
            "Empowering your business through digital innovation. Web, app, and software solutions from CoderTech.",
        creator: "@codertech",
        images: ["/og-image.webp"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    themeColor: "#0A0A0A",
    category: "Software Company",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
