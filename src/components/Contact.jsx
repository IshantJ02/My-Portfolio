export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto p-6 mt-24 mb-24">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>

      <p className="text-gray-400 mb-6 max-w-xl">
        I’m open to internships, projects, and collaboration opportunities.
        Feel free to reach out.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:yourmail@gmail.com"
          className="px-6 py-3 bg-accent text-black rounded-lg text-center font-medium"
        >
          Email Me
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg text-center hover:border-accent"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="px-6 py-3 border border-gray-700 rounded-lg text-center hover:border-accent"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
