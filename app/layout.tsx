import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />

        <main className="ml-64 w-full min-h-screen bg-green-50 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
