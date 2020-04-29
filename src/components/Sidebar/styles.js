import styled from 'styled-components';

export const Container = styled.div`
  width: 56px;
  height: 100%;
  position: fixed;
  padding: 1rem 0;
  background-color: #fff;
  color: #9aaabe;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 12px;
      line-height: 1rem;
      width: 100%;
      text-align: center;
      font-weight: 600;
    }
    &.top a {
      margin-bottom: .5rem;
      font-size: 20px;
    }

    &.bottom a {
      margin-top: .5rem;
      font-size: 18px;
    }   

    a {
      width: 100%;
      color: inherit;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        cursor: pointer;

        &:hover {
          color: #3b5bfd;
        }
      }
    }
  }
`;
