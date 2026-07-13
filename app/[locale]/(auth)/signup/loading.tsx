export default function SignupLoading() {
  return (
    <main className="grow flex items-center justify-center overflow-hidden">
      <section className="w-full max-w-[480px] px-md py-lg md:p-gutter">
        <div className="bg-surface-container-low border border-outline-warm rounded-sm p-lg md:p-xl">
          {/* Logo & Header skeleton */}
          <div className="flex flex-col items-center mb-xl">
            <div className="h-16 w-16 mb-md rounded-sm bg-surface-container-highest animate-pulse" />
            <div className="h-8 w-40 rounded-sm bg-surface-container-highest animate-pulse" />
            <div className="h-4 w-56 mt-base rounded-sm bg-surface-container-highest animate-pulse" />
          </div>

          {/* Form skeleton */}
          <div className="space-y-lg">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-sm">
                <div className="h-4 w-24 rounded-sm bg-surface-container-highest animate-pulse" />
                <div className="h-12 w-full rounded-sm bg-surface-container-highest animate-pulse" />
              </div>
            ))}

            {/* Button skeleton */}
            <div className="h-14 w-full rounded-sm bg-surface-container-highest animate-pulse" />
          </div>

          {/* Footer skeleton */}
          <div className="mt-xl pt-lg border-t border-outline-variant flex justify-between">
            <div className="h-4 w-32 rounded-sm bg-surface-container-highest animate-pulse" />
            <div className="h-4 w-24 rounded-sm bg-surface-container-highest animate-pulse" />
          </div>
        </div>
      </section>
    </main>
  );
}
