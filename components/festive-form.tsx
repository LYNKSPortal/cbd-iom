"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/28768221/4hclthy/";

export function FestiveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "").trim();
    const confirmEmail = String(formData.get("confirm_email") ?? "").trim();

    if (email.toLowerCase() !== confirmEmail.toLowerCase()) {
      setError("Email addresses do not match.");
      return;
    }

    setSubmitting(true);

    const payload = {
      first_name: String(formData.get("first_name") ?? "").trim(),
      surname: String(formData.get("surname") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email,
      confirm_email: confirmEmail,
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <Reveal>
        <div className="glass rounded-sm p-10 text-center max-w-xl mx-auto">
          <span className="font-display text-3xl text-gold mb-3 block">
            You&apos;re in!
          </span>
          <p className="text-ivory/70">
            Thanks for claiming your spot on the 8-Week Festive Shred.
            We&apos;ll be in touch shortly with next steps ahead of the
            1st October start date.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-charcoal/50 border border-white/10 rounded-sm p-8 md:p-10 max-w-xl mx-auto"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="first_name" className="text-xs uppercase tracking-wide text-ivory/70">
              First Name
            </Label>
            <Input
              id="first_name"
              name="first_name"
              required
              placeholder="Jane"
              className="h-11 rounded-none border-white/15"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="surname" className="text-xs uppercase tracking-wide text-ivory/70">
              Surname
            </Label>
            <Input
              id="surname"
              name="surname"
              required
              placeholder="Doe"
              className="h-11 rounded-none border-white/15"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-xs uppercase tracking-wide text-ivory/70">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+44 7700 900000"
            className="h-11 rounded-none border-white/15"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xs uppercase tracking-wide text-ivory/70">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@email.com"
            className="h-11 rounded-none border-white/15"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirm_email" className="text-xs uppercase tracking-wide text-ivory/70">
            Confirm Email
          </Label>
          <Input
            id="confirm_email"
            name="confirm_email"
            type="email"
            required
            placeholder="jane@email.com"
            className="h-11 rounded-none border-white/15"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={submitting}
          className="mt-2 rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] h-12 disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Claim My Festive Spot"}
        </Button>
      </form>
    </Reveal>
  );
}
