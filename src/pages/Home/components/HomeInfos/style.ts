import styled from "styled-components";

export const InfosContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5.9rem 10rem ;
   img{
      height: 22.5rem
   }
 
`
export const SubContainer = styled.div`
   display: flex;
   flex-direction: column;
   
`
export const InfosTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 1rem;
   width: 36.75rem;
   h1{
      color: ${(props) => props.theme["gray-900"]};
      font-family: 'Baloo 2' sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 130%;
   }
   p{
      font-size: 1.25rem;
      line-height: 130%;
   }
`

export const IconsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 4.125rem;
   gap: 1.60rem;
`