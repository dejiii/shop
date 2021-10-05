import Logo from "../../img/logo.png";
// import { Cart } from "../../icons";

import { NavStyles } from "./styles";

function NavBar() {
  return (
    <NavStyles>
      <img src={Logo} alt="" />
      <span>
        Cart
        {/* <Cart /> */}
      </span>
    </NavStyles>
  );
}

export default NavBar;
