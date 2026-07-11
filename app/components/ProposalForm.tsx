'use client';

import { useState } from 'react';

const WEBHOOK_URL =
  'https://vedcy.app.n8n.cloud/webhook/cce43d56-7454-4b94-badc-228352e0bd3d';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ProposalForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      schoolName: (form.elements.namedItem('schoolName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      requirements: (form.elements.namedItem('requirements') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      setFormState('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setFormState('error');
    }
  }

  /* ── Success screen ─────────────────────────────────────────── */
  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center gap-6 text-center animate-fade-in">
        {/* Checkmark */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/40">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white">Proposal Queued!</h2>
        <p className="text-slate-400 max-w-sm leading-relaxed">
          Your proposal is being generated and will be delivered shortly. We&apos;ll
          be in touch soon.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-2 px-6 py-2.5 rounded-full text-sm font-medium text-white border border-white/20 hover:border-violet-400 hover:text-violet-300 transition-all duration-200"
        >
          Submit another
        </button>
      </div>
    );
  }

  /* ── Form ───────────────────────────────────────────────────── */
  const isSending = formState === 'sending';

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
      {/* Institution Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="schoolName" className="text-sm font-medium text-slate-300">
          Institution Name <span className="text-violet-400">*</span>
        </label>
        <input
          id="schoolName"
          name="schoolName"
          type="text"
          required
          placeholder="e.g. Greenwood Academy"
          disabled={isSending}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                     transition-all duration-200 disabled:opacity-50"
        />
      </div>

      {/* Contact Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-300">
          Contact Email <span className="text-violet-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="contact@institution.com"
          disabled={isSending}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                     transition-all duration-200 disabled:opacity-50"
        />
      </div>

      {/* Requirements */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="requirements" className="text-sm font-medium text-slate-300">
          What do they need? <span className="text-violet-400">*</span>
          <span className="ml-1 text-xs text-slate-500 font-normal">(e.g. Website, IoT attendance tracking)</span>
        </label>
        <textarea
          id="requirements"
          name="requirements"
          required
          rows={4}
          placeholder="Describe the solution or services needed..."
          disabled={isSending}
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 resize-none
                     focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                     transition-all duration-200 disabled:opacity-50"
        />
      </div>

      {/* Error message */}
      {formState === 'error' && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
          ⚠️ {errorMsg} — please try again.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSending}
        className="relative w-full py-3.5 rounded-xl font-semibold text-white text-base
                   bg-gradient-to-r from-violet-600 to-indigo-600
                   hover:from-violet-500 hover:to-indigo-500
                   focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0d0d1a]
                   shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50
                   transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
                   active:scale-[0.99]"
      >
        {isSending ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Generate Proposal'
        )}
      </button>
    </form>
  );
}
