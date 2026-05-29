import { AppSidebar } from "./components/layout/app-sidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/ui/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppSidebar />
          {children}
        </ThemeProvider>
      </SidebarProvider>
    </>
  );
}
