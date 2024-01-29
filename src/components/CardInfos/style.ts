import styled from "styled-components";

export type IconsColorsVariant = 'yellow-500' | 'yellow-900' | 'purple-500' | 'gray-700';

interface IconsColorsVariantProps{
   variant: IconsColorsVariant
}

const iconVariants = {
   'yellow-500': '#DBAC2C',
   'yellow-900': '#C47F17',
   'purple-500': '#8047F8',
   'gray-700': '#574F4D'
}
export const ParagraphElement = styled.p<IconsColorsVariantProps>`
   display: flex;
   gap: 0.75rem;
   align-items: center;
   width: 14.43rem;
   span{
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 99999px;
      background-color: ${(props) => iconVariants[props.variant] };
      color: ${(props)=> props.theme["gray-100"]};
   }
   color: ${(props)=> props.theme["gray-700"]};
`