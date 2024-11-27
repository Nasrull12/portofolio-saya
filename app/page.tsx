// app/page.tsx
import Navbar from './components/Navbar';

export default function Page() {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex items-center justify-center bg-blue-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-xl">I am a Web Developer</p>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">I am a passionate web developer skilled in building beautiful and responsive websites.</p>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="mt-2">A brief description of the project.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <p className="mt-4 text-lg">Feel free to reach out to me!</p>
          <form className="mt-8 space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
