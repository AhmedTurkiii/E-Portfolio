import Layout from "@/components/portfolio/Layout";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Torki Ahmed - Portfolio",
  description: "Backend Software Engineer | Full-Stack Developer | AI & Microservices Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

