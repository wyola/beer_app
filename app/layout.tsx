import { Inter } from "next/font/google";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#fff">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </SkeletonTheme>
      </body>
    </html>
  );
}
