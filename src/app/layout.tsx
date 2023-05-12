import "purecss/build/pure.css";
import { Source_Sans_Pro } from "next/font/google";
import { StyledComponentsRegistry } from "../../lib/registry";
import { GlobalStyles } from "../../lib/global-styles";

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Formation Clean Architecture",
  description: "Formation Clean Architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={sourceSansPro.className}>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
