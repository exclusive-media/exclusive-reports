import Image from "next/image";

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-background">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between p-12 bg-surface rounded-2xl shadow-sm sm:items-start border border-border">
        <Image
          className="dark:invert mb-8"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-foreground">
            Exclusive Media Publishing
          </h1>
          <p className="max-w-md text-lg leading-8 text-muted">
            The Ocean theme is now active! Notice the surface background, muted text, and accent colors working seamlessly together.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 text-accent-foreground transition-all hover:opacity-90 md:w-auto border"
            href="#"
          >
            <Image
              className="invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Project
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-border px-8 text-foreground transition-all hover:bg-default/50 md:w-auto"
            href="#"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
