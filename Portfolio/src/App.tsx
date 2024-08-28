import { Header } from "./components/Header"
import avatar from './assets/LEONARDO.jpg'

function App() {

  return <div className="grid px-52 gap-16">
    <Header />
    <main className="grid grid-flow-col gap-11">

      <section className="text-white">
        <h1 className="text-5xl font-bold">Hello, Im Leonardo</h1>
        <h1 className="pt-4 text-5xl font-bold">I am Software Developer</h1>
        <p className="pt-10 font-semibold">Junior Backend Developer, passionate about building robust and scalable solutions. My focus is on creating efficient systems and implementing APIs that support and enhance web applications. With a strong interest in performance optimization and security, I strive to ensure that systems are not only functional but also reliable and secure.

          Let's turn technical challenges into innovative solutions together!</p>
      </section>


      <section>
        <img className="border border-solid rounded-3xl bg-gradientGreenEnd p-1" src={avatar} alt="" />
      </section>

    </main>
  </div>
}

export default App
