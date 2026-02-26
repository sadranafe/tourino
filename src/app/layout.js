import localFont from "next/font/local";
import AuthProvider from "@/provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const yekan = localFont({
  src: "./fonts/yekanBakh-Regular.ttf",
});

export const metadata = {
  title : {
    template : '%s tourino',
    default : 'welcome | Tourino'
  },
  description: "Your gateway to exclusive online tours. From local hidden gems to international wonders, enjoy curated travel experiences, expert guides, and seamless booking—all online",
  author : 'sadra nafe',
};

export default function RootLayout({ children }) {
  return (
    <html lang = "fa" dir = "rtl">
      <body className = {`${yekan.className} text-sm select-none antialiased`}>
        <AuthProvider>
          <TooltipProvider>
            <Navbar/>
            <Toaster position = "top-left"/>
            <main className = "my-3">{ children }</main>
            <Footer/>
          </TooltipProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
