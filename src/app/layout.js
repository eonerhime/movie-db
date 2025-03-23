import "@/styles/globals.css";
import Header from "@/components/Header";
import ThemeCom from "@/components/ThemeCom";
import SearchBox from "@/components/SearchBox";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Movie DB - IMDB Clone",
  description: "A clone of IMDB built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${montserrat.className} antialiased`}>
          <ThemeCom>
            <Header />
            <NavBar />
            <SearchBox />
            {children}
          </ThemeCom>
        </body>
      </html>
    </ClerkProvider>
  );
}
