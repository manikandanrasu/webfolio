import Hamburger from "../components/Hamburger";

const Navbar = () => {
  
  return (
    <div className="fixed top-0 flex flex-row w-full h-16 md:px-[78px] px-12 justify-between items-center z-[50]">
      <span>mani.codes</span>
      <button>
        <Hamburger size={40} />
      </button>
    </div>
  )
}

export default Navbar;