export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="md:px-60">{children}</main>
    </>
  );
}
