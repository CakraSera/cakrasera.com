import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
