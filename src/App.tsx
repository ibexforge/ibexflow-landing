import type { ReactNode } from 'react'

/* ---------------------------------------------------------------------------
 * IbexFlow — single page product site.
 * Light, academic aesthetic matching the desktop app: slate-50 paper,
 * deep purple accents, white cards, generous whitespace.
 * Layout: Hero · Features · Footer.
 * ------------------------------------------------------------------------- */

function RustIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 2.75 20 7.4v9.2l-8 4.65-8-4.65V7.4l8-4.65Z" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 8.75V6.1M15.25 12h2.65M12 15.25v2.65M8.75 12H6.1" />
    </svg>
  )
}

function KeyboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
      <path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M8 14h8" />
    </svg>
  )
}

function LocalDiskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <ellipse cx="12" cy="6" rx="7.25" ry="3.25" />
      <path d="M4.75 6v12c0 1.8 3.25 3.25 7.25 3.25S19.25 19.8 19.25 18V6" />
      <path d="M4.75 12c0 1.8 3.25 3.25 7.25 3.25S19.25 13.8 19.25 12" />
    </svg>
  )
}

type Feature = {
  id: string
  title: string
  tag: string
  body: string
  chips: string[]
  icon: ReactNode
}

const FEATURES: Feature[] = [
  {
    id: 'rust-tauri',
    title: 'Built with Rust & Tauri',
    tag: 'Lightweight & secure',
    body: 'A memory-safe Rust core inside a native Tauri shell, with no bundled browser. IbexFlow launches in a blink and stays light on memory.',
    chips: ['Rust 2024', 'Tauri 2', '< 12 MB installer'],
    icon: <RustIcon />,
  },
  {
    id: 'keyboard-centric',
    title: 'Keyboard-centric',
    tag: 'Hands stay on the keys',
    body: 'Every action has a shortcut. Create, link, fold and traverse nodes without leaving the keyboard, and reach any command through one palette.',
    chips: ['⌘K palette', 'Vim-style motions', 'No mouse needed'],
    icon: <KeyboardIcon />,
  },
  {
    id: 'local-first',
    title: 'Local First',
    tag: 'Private by default',
    body: 'Maps are plain text files in a folder you own. No account, no sync server, no telemetry — the app behaves the same with the network unplugged.',
    chips: ['Plain text files', 'Works offline', 'No telemetry'],
    icon: <LocalDiskIcon />,
  },
]

function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* very soft brand tint, barely there */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(126,34,206,0.07),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-600" />
            </span>
            In review — coming soon to macOS
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Ibex<span className="text-purple-700">Flow</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl">
            A Tactical, Ultra-Fast Desktop Mind-Mapping Tool for Visual Thinkers.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3">
            <button
              type="button"
              disabled
              title="IbexFlow is still in review — downloads open at launch."
              className="inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-6 py-3 text-sm font-semibold text-purple-700 shadow-sm transition-colors hover:bg-purple-100 disabled:cursor-not-allowed"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.5V12l3 2" />
              </svg>
              Coming Soon
            </button>
            <p className="text-xs text-slate-400">
              Currently under review · macOS first, Windows to follow
            </p>
          </div>
        </div>

        {/* raw screenshot — the app's own native title bar is part of the capture */}
        <figure className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <img
            src="/hero.png"
            width={1804}
            height={1360}
            alt="IbexFlow window showing a mind map with a root node, four branches and the command palette open"
            className="block h-auto w-full rounded-xl border border-gray-200 shadow-lg"
          />
          <figcaption className="mt-4 text-center text-xs text-slate-400">
            Preview from an early build — the final screenshot ships with v1.0.
          </figcaption>
        </figure>
      </div>
    </header>
  )
}

function Features() {
  return (
    <section aria-labelledby="features-heading" className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-purple-700 uppercase">Features</p>
          <h2
            id="features-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Everything you need to think clearly.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Three principles shaped the app: stay small, stay on the keyboard, and keep your notes on
            your own machine.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-purple-100 bg-purple-50 text-purple-700">
                {feature.icon}
              </span>

              <h3 className="mt-5 text-base font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-1 text-sm font-medium text-purple-700">{feature.tag}</p>
              <p className="mt-3 grow text-sm leading-relaxed text-slate-600">{feature.body}</p>

              <ul className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
                {feature.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">© 2026 Mount Studio. Built by an Indie Hacker.</p>
        <p className="text-xs text-slate-400">IbexFlow v0.1.0 · macOS · Windows</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
