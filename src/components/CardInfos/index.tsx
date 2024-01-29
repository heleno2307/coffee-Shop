import { ReactNode } from "react";
import { IconsColorsVariant, ParagraphElement } from "./style";

interface Props{
   variant?:IconsColorsVariant;
   textCard:string;
   children:ReactNode
}
export function CardInfos({variant='yellow-900',textCard,children,...props}:Props){
   return(
      <ParagraphElement
         variant={variant}
         {...props}
      >
         <span>
            {children}
         </span>
         {textCard}
      </ParagraphElement>
   )
}