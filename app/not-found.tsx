import {
  NotFoundHeader,
  NotFoundHero,
  FaultLogWidget,
  SystemPulseWidget,
  NotFoundFooter,
} from "./components/website/not-found/index";

export default function NotFound() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center pt-16 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#FF5C00 1px, transparent 1px), linear-gradient(90deg, #FF5C00 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Hero section */}
          <div className="lg:col-span-7">
            <NotFoundHero />
          </div>

          {/* Diagnostic widgets */}
          <div className="lg:col-span-5 flex flex-col gap-gutter">
            <FaultLogWidget />
            <SystemPulseWidget />
          </div>
        </div>

        {/* Decorative atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-orange opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tertiary-container opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      </main>
    </>
  );
}
