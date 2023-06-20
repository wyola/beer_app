import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "./StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fancy a beer?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
