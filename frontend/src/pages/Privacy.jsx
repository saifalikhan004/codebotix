import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-900 pt-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-gray-700">
          Your privacy matters to CodeBotix. This policy explains what we collect,
          why we collect it, and how we use it.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Information We Collect</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Contact details you share (e.g., name and email) for newsletters or demos.</li>
          <li>Basic analytics (pages visited, device type) to improve our site experience.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">How We Use Your Information</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>To communicate updates, learning resources, and demo confirmations.</li>
          <li>To improve site performance and content relevance.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Data Sharing</h2>
        <p className="mt-2 text-gray-700">
          We do not sell your personal data. We may use trusted services for email and
          analytics under agreements that protect your data.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Your Choices</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Unsubscribe from emails anytime using the link in the email.</li>
          <li>Contact us to update or delete your information.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">
          Questions about privacy? Email us at <a className="text-blue-600 underline" href="mailto:codebotix@gmail.com">codebotix@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
