import type { Metadata } from 'next';
import ProposalForm from './components/ProposalForm';

export const metadata: Metadata = {
  title: 'VertexSoft Proposal Generator',
  description:
    'Generate a tailored B2B proposal for your institution in seconds. Powered by VertexSoft Labs.',
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d1a] px-4 py-12">
      {/* ── Ambient background orbs ─────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full
                   bg-violet-700/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full
                   bg-indigo-600/20 blur-[100px]"
      />

      {/* ── Card ────────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-lg
                   rounded-2xl border border-white/10
                   bg-white/5 backdrop-blur-xl
                   shadow-2xl shadow-black/60
                   px-8 py-10"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          {/* Logo pill */}
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
                           bg-violet-500/15 text-violet-300 border border-violet-500/25">
            VertexSoft Labs
          </span>

          <h1 className="text-3xl font-extrabold text-white leading-tight tracking-tight">
            Proposal{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Fill in the details below and we&apos;ll craft a tailored proposal for your institution.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Form */}
        <ProposalForm />
      </div>
    </main>
  );
}
