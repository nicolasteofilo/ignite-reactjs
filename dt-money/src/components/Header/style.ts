import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button { 
    font-size: 1rem;
    color: #FFF;
    /* background-color: var(--blue-light); */
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;
    
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    }

    &:hover {
      filter: brightness(0.9)
    }   
`