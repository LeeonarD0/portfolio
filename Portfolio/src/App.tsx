import { Header } from "./components/Header"
import avatar from './assets/LEONARDO.jpg'
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"
import Typewriter from "./hooks/TypeWriter"



function App() {

  return <div className="grid px-52 gap-16 justify-center  ">
    <Header />


    <main className="grid grid-flow-col items-center p-0 m-0 overflow-hidden">

      <section className="text-white  grid gap-y-16">
        <div className="overflow-">
          <h1 className="text-5xl font-bold">Hello, Im Leonardo</h1>
          <span className="text-4xl">Sof<Typewriter text="tware Developer" delay={99} infinite/></span>
          <p className="pt-10 font-semibold ">Junior Backend Developer, passionate about building robust and scalable solutions. My focus is on creating efficient systems and implementing APIs that support and enhance web applications. With a strong interest in performance optimization and security, I strive to ensure that systems are not only functional but also reliable and secure.
            Let's turn technical challenges into innovative solutions together!</p>
        </div>

        <div className="flex gap-6">
          <a href=""><GithubLogo size={39} className=" bg-gradientBlackStart border-2 border-green  rounded-lg" color="#39FF14" /></a>
          <a href=""><Envelope size={39} className=" bg-gradientBlackStart border-2 border-green  rounded-lg" color="#39FF14" /></a>
          <a href=""><LinkedinLogo size={39} className=" bg-gradientBlackStart border-2 border-green  rounded-lg" color="#39FF14" /></a>
        </div>

      </section>


      <section>
  <img className="border border-solid rounded-full bg-gradientGreenEnd p-1 relative ro" src={avatar} alt="" />
</section>


    </main>
  </div>
}

export default App
