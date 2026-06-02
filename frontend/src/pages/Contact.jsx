import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-900 pt-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-700">
          We'd love to hear from you. Reach out with questions about programs, partnerships,
          or demo sessions.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Email</h2>
        <p className="mt-2 text-gray-700">
          <a className="text-blue-600 underline" href="mailto:codebotix@gmail.com">codebotix@gmail.com</a>
        </p>

        <h2 className="mt-6 text-xl font-semibold">Demo Class</h2>
        <p className="mt-2 text-gray-700">
          Book a free demo session here:
          {" "}
          <a
            className="text-blue-600 underline"
            href="https://calendly.com/codebotix/free-demo-class?month=2026-01"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendly — CodeBotix Demo
          </a>
        </p>

        <h2 className="mt-6 text-xl font-semibold">Social</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
          <li>Instagram: <a className="text-blue-600 underline" href="https://www.instagram.com/codebotix" target="_blank" rel="noopener noreferrer">@codebotix</a></li>
          <li>YouTube: <a className="text-blue-600 underline" href="https://www.youtube.com/@CodeBotix" target="_blank" rel="noopener noreferrer">@CodeBotix</a></li>
          <li>X/Twitter: <a className="text-blue-600 underline" href="https://x.com/CodeBotix" target="_blank" rel="noopener noreferrer">@CodeBotix</a></li>
        </ul>
      </div>
    </div>
  );
}
