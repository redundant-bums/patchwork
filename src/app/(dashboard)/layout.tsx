export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-1 h-full">

        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* renders Home component from (dashboard)/page.tsx */}
          {children}
        </main>
      </div>
    );
  }