import '@/app/ui/global.css'
import { Lusitana } from "next/font/google";
const lusitana = Lusitana({
  subsets: ["latin"],
  weight : "700",
  variable : "--font-lusitana"
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lusitana.variable}>
      <body>{children}</body>
    </html>
  );
}
