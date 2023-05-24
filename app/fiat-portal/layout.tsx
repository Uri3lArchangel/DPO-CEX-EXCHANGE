import "../globals.css";
import { B612 } from "next/font/google";
import layout from '../styles/portal/scss/index.module.scss'

const b612 = B612({
  weight: ["400","700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DPO-Exchange | Fiat Portal",
  description:
    "Buy your DPO tokens using fiat, integrated with mordern technologies, ease of purchase ",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={b612.className}>
        <main className={layout.Main}>{children}</main>
      </body>
    </html>
  );
}
