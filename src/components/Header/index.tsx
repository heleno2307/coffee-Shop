import { CartButton, HeaderContainer } from "./style";
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
export function Header(){
   return (
      <HeaderContainer>
         <img src={logo} alt="logo" />
         <div>
            <label htmlFor="">
               <MapPin size={22} weight="fill" />
               Belo Horizonte, MG
            </label>
            <CartButton>
               <ShoppingCart size={22} weight="fill" />
            </CartButton>
         </div>
      </HeaderContainer>
   )
}