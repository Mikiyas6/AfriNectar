function Contact() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-pink-700 sm:text-4xl">
          Let&apos;s Get in Touch 🌷
        </h2>
        <p className="mt-4 text-lg text-pink-600">
          Have a question, special request, or just want to say hello? Fill out
          the form below, and we`apos&;`ll get back to you shortly.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <form className="grid gap-6 rounded-lg border border-gray-200 bg-pink-100 p-8 shadow-md">
          <div>
            <label
              htmlFor="name"
              className="block  text-sm font-medium text-pink-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="mt-1 px-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-pink-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 px-4 py-2  w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-pink-800"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="mt-1 px-4 py-2  w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-pink-700 px-6 py-3 text-white font-medium hover:bg-pink-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mx-auto mt-12 max-w-4xl text-center text-sm text-gray-500">
        <p className="text-black">
          Or reach us directly at{" "}
          <a
            href="mailto:support@afrinenectar.com"
            className="text-pink-700 underline"
          >
            support@afrinenectar.com
          </a>{" "}
          or call{" "}
          <a href="tel:+251911223344" className="text-pink-700 underline">
            +251 911 223 344
          </a>
        </p>
        <p className="mt-2 text-black">Addis Ababa, Ethiopia</p>
      </div>
    </section>
  );
}

export default Contact;
