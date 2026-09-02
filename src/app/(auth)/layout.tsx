export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-root items-center justify-center">
      <div className="w-full max-w-md p-8">{children}</div>
    </div>
  );
}
