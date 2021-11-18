import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input { 
    width: 100%;    
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--border);
    background: var(--input-backgroud);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }
    & + input {
        margin-top: 1rem;
    }

}
    button[type="submit"] {
        width: 100%;
        height: 4rem;
        border-radius: 0.25rem;
        padding: 0 1.5rem;
        background: var(--orange);
        color: #FFF;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
