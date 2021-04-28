import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 30px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export default Container;
