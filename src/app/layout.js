import localFont from "next/font/local";
import "./globals.css";

const yekan = localFont({
  src: "./fonts/yekanBakh-Regular.ttf",
});

export const metadata = {
  title : {
    template : '%s tourino',
    default : 'welcome | tourino'
  },
  description: "Your gateway to exclusive online tours. From local hidden gems to international wonders, enjoy curated travel experiences, expert guides, and seamless booking—all online",
  author : 'sadra nafe',
};

export default function RootLayout({ children }) {
  return (
    <html lang = "fa">
      <body className = {`${yekan.className} antialiased`}> {children} </body>
    </html>
  );
}
