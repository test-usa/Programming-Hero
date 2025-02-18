import Header from "../layout/Header"
import logo from "../assets/images/home.png"
const Home = () => {
  return (
    <div className="relative min-h-screen bg-black ">
      <Header />
      {/* bg-gradient-to-r from-[#ff37f2]  to-[#405aff] bla  */}
      <div className="absolute flex flex-col items-center justify-center w-full gap-4 text-white font-Grotesk ">
        <h2 className="font-extrabold text-7xl bg-text-gradient "> Let's code_ Your Career</h2>
        <p className="max-w-2xl text-xl text-center">We're on a mission to provide personalized learning and empower individuals to kick-start their careers.</p>
        <button className="px-10 py-2 text-xl ring-3 rounded-br-2xl bg-custom-gradient">Explore</button>
      </div>

      <div className="absolute bottom-0 ">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Home
