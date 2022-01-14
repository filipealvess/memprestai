import styled from 'styled-components';

const LeasesGridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default LeasesGridWrapper;
