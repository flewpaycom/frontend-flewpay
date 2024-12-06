import NavbarUserDashboard from "@/components/user/dashboard/navbarUserDashboard"

type LayoutChildren = React.ReactNode;
const Layout = ({ children }: { children: LayoutChildren }) => {
  return (
    <main >
      <section className="section max-w-[100vw] flex items-center justify-center top-0 sticky bg-white/50 backdrop-blur-md ">
        <NavbarUserDashboard />
      </section>
      <section className="min-h-screen">
        {children}
      </section>
    </main>
  );
}

export default Layout;
