import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 800px;
  min-width: 1280px;

  @media (max-width: 940px) and (orientation: portrait) {
    min-height: 0;
    min-width: 0;
  }
`;

export const UpContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;

  @media (max-width: 940px) and (orientation: portrait) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const BoxAside = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
  width: 40vw;
  top: 0;
  color: #fff;
  padding: 6rem 0 6rem 6rem;

  @media (max-width: 940px) and (orientation: portrait) {
    width: 100%;
    align-items: center;
    padding: 0;
    height: 35%;
  }
`;

export const DropDown = styled.select`
  height: 2.8rem;
  width: 13.5rem;
  border: none;
  border-radius: 0.3125rem;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding-left: 1.44rem;

  @media (max-width: 940px) and (orientation: portrait) {
    margin: 2rem 0;
  }
`;

export const Logo = styled.img`
  height: 3.75rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.44rem;

  @media (max-width: 940px) and (orientation: portrait) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const RaffleTxt = styled.div`
  @media (max-width: 940px) and (orientation: portrait) {
    text-align: center;
  }
`;

export const Raffle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const RaffleNumber = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const TitleText = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`;

export const RightContainer = styled.h1`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;

  @media (max-width: 940px) and (orientation: portrait) {
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0 0 0;
    height: 60vh;
  }
`;

export const RaffleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 70vh;
  gap: 2rem;
  margin: auto;
  padding: 7rem;

  @media (max-width: 940px) and (orientation: portrait) {
    padding: 0;
    width: 90%;
    height: 80%;
    margin: 0;
  }
`;

export const RaffleBall = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.7rem;

  @media (max-width: 940px) and (orientation: portrait) {
    height: 4.75rem;
    width: 4.75rem;
    font-size: 1.25rem;
  }
`;

export const Bottom = styled.p`
  position: relative;
  bottom: 6rem;
  @media (max-width: 940px) and (orientation: portrait) {
    bottom: 2rem;
    width: 60%;
    text-align: center;
  }
`;
