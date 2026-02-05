import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactModal({ open, onClose }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-[#e6f2ff] rounded-2xl w-[90%] max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          CONTACT ME
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border-2 border-black"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border-2 border-black"
          />

          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg border-2 border-black"
          />

          <textarea
            name="message"
            required
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg border-2 border-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}
