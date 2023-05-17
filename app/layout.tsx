import "./globals.css";
import { B612,  } from "next/font/google";
import layout from './styles/scss/index.module.scss'

const b612 = B612({
  weight: ["400","700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DPO-Exchange | Buy and Sell DPO tokens",
  description:
    "Trade your DPO tokens using fiat & crypto, Buy and Sell at market price",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={b612.className}>
        <main className={layout.Main}>{children}</main>
      </body>
    </html>
  );
}
