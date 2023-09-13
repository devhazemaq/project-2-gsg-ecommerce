"use client";

import { ThemeProvider as ContextThemeProvider } from "@/contexts/themeContext";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";

import { darkTheme, theme } from "@/styles/theme";
import GlobalStyle from "@/styles/global";
import { StyledContainer } from "@/components/atoms/Container/style";
import NavparMain from "@/components/organism/NavparMain";
import SubscribeNewsletter from "@/components/molecules/SubscribeNewsletter";
import FooterInfo from "@/components/organism/FooterInfo";
import Footer from "@/components/organism/Footer/Footer";

import StyledJsxRegistry from "./StyledJsxRegistry";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/*  suppressHydrationWarning={true} to solve this warming app-index.js:31 Warning: Extra attributes from the server: cz-shortcut-listen*/}
        <Provider store={store}>
          <ContextThemeProvider>
            {(myTheme) => (
              <ThemeProvider theme={myTheme === "light" ? theme : darkTheme}>
                <StyledJsxRegistry>
                  <GlobalStyle />

                  {children}
                </StyledJsxRegistry>
              </ThemeProvider>
            )}
          </ContextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
