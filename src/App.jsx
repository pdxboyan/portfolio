import Navbar from "./components/navbar";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <section id="hero" className="h-screen flex items-center justify-center bg-blue-50">
        <h1 className="text-5xl font-bold">Hero Section</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-green-50">
        <h2 className="text-4xl font-bold">Projects Section</h2>
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-yellow-50">
        <h2 className="text-4xl font-bold">About Section</h2>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-purple-50">
        <h2 className="text-4xl font-bold">Contact Section</h2>
      </section>
    </div>
  );
}

export default App;