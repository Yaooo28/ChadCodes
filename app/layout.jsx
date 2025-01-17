import { Prompt } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Import and configure the Prompt font
const promptFont = Prompt({ 
  subsets: ["latin"],
  weight:["100", "200", "300", "400", "500", "600", "700", "800"],
  variable:'--font-prompt'
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={promptFont.variable}>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
      </body>  
    </html>
  );
}
