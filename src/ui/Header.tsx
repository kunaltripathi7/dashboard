import Navigation from "./Navigation";
import Searchbar from "./Searchbar";
import UserConfig from "./UserConfig";

function Header() {
  return (
    <header className="flex px-6 pt-3 pb-1.5 items-center">
      <Navigation />
      <Searchbar placeholder={"Search widgets..."} />
      <UserConfig />
    </header>
  );
}

export default Header;
