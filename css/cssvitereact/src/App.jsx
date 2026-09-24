import { useState } from 'react'

const App = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f1f6f3] px-5 py-8 text-[#17211f] sm:px-8 sm:py-12 lg:px-16">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#cfe6d7] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-44 -left-28 h-96 w-96 rounded-full bg-[#f6dfbd] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
        <header className="flex items-center justify-between pb-12">
          <a className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-[#173d32]" href="#top">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#173d32] text-base text-white shadow-lg shadow-[#173d32]/20">n</span>
            NESTFORM
          </a>
          <span className="hidden text-sm font-medium text-[#61716b] sm:block">Workspace setup · 01 / 03</span>
        </header>

        <section className="grid flex-1 items-center gap-12 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="max-w-md">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c37a36]">
              <span className="h-px w-8 bg-[#c37a36]" /> First things first
            </p>
            <h1 className="max-w-sm text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#173d32] sm:text-6xl">
              Let’s make space for good work.
            </h1>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#61716b]">
              Tell us a little about yourself and we’ll shape your workspace around the way you think and create.
            </p>
            <div className="mt-10 hidden items-center gap-3 text-sm text-[#61716b] sm:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[#c8d9d0] bg-white text-[#c37a36]">✦</span>
              Takes less than 2 minutes
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(23,61,50,0.12)] backdrop-blur-xl sm:p-10">
            {submitted ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#d8efe0] text-2xl text-[#28724f]">✓</div>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#173d32]">You’re all set.</h2>
                <p className="mt-3 max-w-xs leading-6 text-[#61716b]">Your workspace preferences have been saved. Welcome to Nestform.</p>
                <button className="mt-8 rounded-xl bg-[#173d32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245646]" onClick={() => setSubmitted(false)} type="button">Edit details</button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#173d32]">A little about you</h2>
                  <p className="mt-2 text-sm text-[#789087]">This helps us personalize your experience.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#35544a]">First name
                    <input className="mt-2 w-full rounded-xl border border-[#d9e5de] bg-[#f8fbf9] px-4 py-3.5 text-[#173d32] outline-none transition placeholder:text-[#a3b2ab] focus:border-[#4f9b73] focus:ring-4 focus:ring-[#4f9b73]/10" placeholder="e.g. Maya" required type="text" />
                  </label>
                  <label className="block text-sm font-semibold text-[#35544a]">Last name
                    <input className="mt-2 w-full rounded-xl border border-[#d9e5de] bg-[#f8fbf9] px-4 py-3.5 text-[#173d32] outline-none transition placeholder:text-[#a3b2ab] focus:border-[#4f9b73] focus:ring-4 focus:ring-[#4f9b73]/10" placeholder="e.g. Chen" required type="text" />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-[#35544a]">Email address
                  <input className="mt-2 w-full rounded-xl border border-[#d9e5de] bg-[#f8fbf9] px-4 py-3.5 text-[#173d32] outline-none transition placeholder:text-[#a3b2ab] focus:border-[#4f9b73] focus:ring-4 focus:ring-[#4f9b73]/10" placeholder="you@example.com" required type="email" />
                </label>

                <label className="block text-sm font-semibold text-[#35544a]">What are you working on?
                  <textarea className="mt-2 min-h-28 w-full resize-none rounded-xl border border-[#d9e5de] bg-[#f8fbf9] px-4 py-3.5 text-[#173d32] outline-none transition placeholder:text-[#a3b2ab] focus:border-[#4f9b73] focus:ring-4 focus:ring-[#4f9b73]/10" placeholder="A product, a side project, a big idea..." required />
                </label>

                <div className="flex items-start gap-3 pt-1 text-sm text-[#789087]">
                  <input className="mt-0.5 h-4 w-4 accent-[#28724f]" id="updates" type="checkbox" />
                  <label htmlFor="updates">Send me occasional ideas for better, calmer work.</label>
                </div>

                <button className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#173d32] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#173d32]/15 transition hover:-translate-y-0.5 hover:bg-[#245646]" type="submit">
                  Continue <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-center text-xs text-[#9aaaA3]">By continuing, you agree to our terms and privacy policy.</p>
              </form>
            )}
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-[#dce8e1] pt-5 text-xs text-[#8c9c95]">
          <span>© 2026 Nestform</span>
          <span>Thoughtfully made for focused people.</span>
        </footer>
      </div>
    </main>
  )
}

export default App
