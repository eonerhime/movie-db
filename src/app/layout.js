import "@/styles/globals.css";
import Header from "@/components/Header";
import ThemeCom from "@/components/ThemeCom";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${montserrat.className} antialiased`}>
          <ThemeCom>
            <Header />
            <NavBar />
            {children}
          </ThemeCom>
        </body>
      </html>
    </ClerkProvider>
  );
}
