export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-20 text-center"
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="max-w-2xl text-gray-600 leading-7">
          Whether you're interested in working together, have a project in mind,
          or simply want to say hello, I'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:suvrataga4@gmail.com"
            className="px-6 py-3 rounded-full border border-gray-300"
          >
            Email Me
          </a>

          <a
            href="https://github.com/suvrata-pixel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suvrata-g-a-5aa226232/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}