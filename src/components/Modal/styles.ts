import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 687px;
  height: 772px;
  background-color: rgba(235, 235, 235, 1);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  background: none;
`;

export const Name = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 36.31px;
  text-align: left;
  color: rgba(0, 140, 199, 1);
`;

export const TopModal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ImageModal = styled.img`
  position: absolute;
  width: 363px;
  height: 363px;
  top: -250px;
`;

export const DescriptionModal = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  padding: 32px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

export const LevelDigimon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const BluePoint = styled.div`
  width: 15px;
  height: 15px;
  background: rgba(0, 140, 199, 1);
  border-radius: 50%;
`;

export const NameLevel = styled.p`
  font-size: 30px;
  font-weight: 400;
  color: rgba(156, 156, 156, 1);
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: rgba(156, 156, 156, 1);
`;

export const Span = styled.span`
  color: rgba(39, 39, 39, 1);
`;
