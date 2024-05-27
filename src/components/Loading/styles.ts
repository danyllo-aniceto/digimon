import styled, { keyframes } from 'styled-components';

interface ISkeletonElementStyledProps {
  height: number;
  width: number;
}

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonElement = styled.div<ISkeletonElementStyledProps>`
  background: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #ddd 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 8px;

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
