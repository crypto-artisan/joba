import AppTopbar from "../app-topbar";

export default function AppMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <AppTopbar />
      <main className='flex flex-col w-full text-foreground px-2 md:px-8 bg-neutral-100 overflow-y-auto h-screen'>
        {children}
      </main>
    </div>
  );
}
