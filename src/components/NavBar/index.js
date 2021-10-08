import Logo from "../../img/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { NavStyles } from "./styles";

function NavBar() {
  return (
    <NavStyles className="container">
      <img src={Logo} alt="" />
      <span>
        <AiOutlineShoppingCart style={{ fontSize: "30" }} />
      </span>
    </NavStyles>
  );
}

export default NavBar;
