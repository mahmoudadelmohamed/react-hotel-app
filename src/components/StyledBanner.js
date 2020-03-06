import styled from 'styled-components';
import defaultBcg from "../images/room-1.jpg";

const StyledBanner = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default StyledBanner;
