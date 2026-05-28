export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        {children}
      </div>

      {/* Right side - Image with overlay */}
      <div className="hidden lg:flex relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&auto=format&fit=crop')`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Better Care Through <br /> Smarter Hospital <br /> Management.
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
            A secure, centralized platform to manage patients, staff, and
            hospital operations efficiently.
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Trusted by healthcare teams
              </p>
              <p className="text-white/60 text-xs">
                Used by hospitals and clinics across multiple departments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}