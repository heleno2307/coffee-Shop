import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 2rem 10rem;

   img{
      height:40px ;
   }

   div{
      display: flex;
      gap: 0.7rem;
      align-items: center;
      justify-content: center;
   }

   label{
      background-color: ${(props) => props.theme["purple-100"]};
      display: flex;
      gap: 0.25rem;
      padding : 0.5rem;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme["purple-900"]};
      border-radius: 8px;
      font-size: 0.87rem;
      line-height: 130%;
   }
`

export const CartButton = styled.button`
   padding: 0.5rem;
   background-color: ${(props) => props.theme["yellow-100"]};
   color: ${(props) => props.theme["yellow-900"]};
   border: none;
   outline: none;
   border-radius: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
`