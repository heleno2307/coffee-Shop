import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IconsContainer, InfosContainer, InfosTextContainer, SubContainer } from "./style";
import bigCoffee from '../../../../assets/coffee.png'
import { CardInfos } from "../../../../components/CardInfos";
export function HomeInfos(){
   return(
      <InfosContainer>
         <SubContainer>

           <InfosTextContainer>
               <h1>Encontre o café perfeito para qualquer hora do dia</h1>
               <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
           </InfosTextContainer>

            <IconsContainer>
               <CardInfos variant="yellow-900" textCard="Compra simples e segura">
                  <ShoppingCart weight="fill" height={16} />
               </CardInfos>

               <CardInfos variant="gray-700" textCard="Embalagem mantém o café intacto">
                  <Package weight="fill" height={16} />
               </CardInfos>

               <CardInfos variant="yellow-500" textCard="Entrega rápida e rastreada">
                  <Timer weight="fill" height={16} />
               </CardInfos>
               
               <CardInfos variant="purple-500" textCard="O café chega fresquinho até você">
                  <Coffee weight="fill" height={16} />
               </CardInfos>
            </IconsContainer>

         </SubContainer>
         <img src={bigCoffee}/>
   </InfosContainer>
   )
}