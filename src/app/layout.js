import localFont from "next/font/local";
import "./globals.css";

const yekan = localFont({
  src: "./fonts/yekanBakh-Regular.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang = "fa">
      <body className = {`${yekan.className} antialiased`}> {children} </body>
    </html>
  );
}
