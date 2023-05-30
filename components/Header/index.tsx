import { useState } from "react"

type MenuItem = {
  title: string;
  subMenuItems: string[];
};

type HeaderProps = {
  menuItems: MenuItem[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header
      className="flex justify-between items-center text-black
    px-6 py-4"
    >
      <h1 className="text-lg font-bold">Logo</h1>
    <div className="flex">
        <nav className="flex items-center">
            <ul className=" flex items-center gap-6">
            {menuItems.map((menuItem) => (
                <li className="relative cursor-pointer" key={menuItem.title}>
                <span className="text-base uppercase hover:text-gray-400" onClick={toggleMenu}>
                    {menuItem.title}
                </span>

                {showMenu && (
                    <ul className="absolute top-full left-0 min-w-32 py-2 bg-white rounded shadow-lg">
                    {menuItem.subMenuItems.map((subMenuItem) => (
                        <li className=" px-3 py-2 hover:bg-gray-100" key={subMenuItem}>
                        <a href="#">{subMenuItem}</a>
                        </li>
                    ))}
                    </ul>
                )}
                </li>
            ))}
            </ul>
        </nav>

        <div className="flex items-center">
            <button className=" px-5 bg-secondary hover:bg-blue-600 text-white py-2 border-secondary border ml-4">Login</button>
            <button className="px-5 bg-secondary hover:bg-blue-600 text-white  py-2  ml-4">Signup</button>
        </div>
    </div>
     
    </header>
  );
};

export default Header;
