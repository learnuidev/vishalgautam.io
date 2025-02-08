"use client";

import { ReactQueryProvider } from "@/libs/react-query/react-query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </div>
  );
}
