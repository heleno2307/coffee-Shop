
import { Coffees } from "./components/Coffees";
import { HomeInfos } from "./components/HomeInfos";
import { MainContainer } from "./style";
export function Home(){
   return (
      <MainContainer>
         <HomeInfos />
         <Coffees />
      </MainContainer>
   )
}