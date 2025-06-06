import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type{ Viewport, Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import SessionWrapper from "./SessionWrapper";
import { ThemeProvider } from "next-themes";
import { PostHogProvider } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import PersistentModals from "@/components/persistent-modals";
import ServiceWorkerRegistration from "@/components/service-worker-registration";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export const metadata: Metadata = {
  title: "Moneyger",
  description: "Manage your money with Moneyger",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Moneyger",
    statusBarStyle: "default",
    capable: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={GeistSans.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TRPCReactProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <SessionWrapper>
                <PostHogProvider>
                  <PersistentModals />
                  {children}
                  <Toaster />
                  <ServiceWorkerRegistration />
                </PostHogProvider>
              </SessionWrapper>
            </NextIntlClientProvider>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}