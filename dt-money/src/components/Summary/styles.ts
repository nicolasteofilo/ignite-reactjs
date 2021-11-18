import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: #363f5f;

    header { 
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong { 
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.highlight-backgroud {
      background: #4040ff;
      color: #FFF
    }
  }
`