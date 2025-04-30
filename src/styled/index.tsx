import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const FilterWrapper = styled.div`
  flex: 1;
`;

export const ProductsWrapper = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  @media (max-width: 1068px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 14rem;
  display: grid;
  place-items: center;
`;

export const Chip = styled.div`
  display: inline-block;
  background-color: #f4f4f4;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  margin: 0.6rem 0;
`;
