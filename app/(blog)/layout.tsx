import { NavBar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />

      <div className="p-4 max-w-3xl mx-auto">{children}</div>
    </div>
  );
}
