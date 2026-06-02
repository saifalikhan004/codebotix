import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-900 pt-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        <p className="mt-3 text-gray-700">
          By using CodeBotix, you agree to these terms. Please read them carefully.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Use of the Site</h2>
        <p className="mt-2 text-gray-700">
          You agree not to misuse the site or interfere with its normal operation. Content
          provided is for learning and informational purposes.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Classes and Content</h2>
        <p className="mt-2 text-gray-700">
          Our programs focus on hands-on learning. Curriculum and schedules may change to
          improve outcomes. We may update content without prior notice.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Intellectual Property</h2>
        <p className="mt-2 text-gray-700">
          All site content and materials are owned by CodeBotix or its licensors. You may
          not copy, resell, or redistribute content without permission.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Liability</h2>
        <p className="mt-2 text-gray-700">
          CodeBotix is not liable for indirect or consequential losses. To the extent permitted
          by law, total liability is limited to amounts you have paid directly to us.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">
          For questions about these terms, email <a className="text-blue-600 underline" href="mailto:codebotix@gmail.com">codebotix@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
