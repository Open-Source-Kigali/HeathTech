export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-900 text-white p-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">Healthtech</span>
        </div>
        <div>
          <p className="text-2xl font-semibold leading-snug">
            Empowering healthcare institutions <br /> across Africa.
          </p>
          <p className="text-slate-400 mt-3 text-sm">
            Affordable. Modular. Open-source.
          </p>
        </div>
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Healthtech. All rights reserved.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}