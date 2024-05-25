import { SkeletonElement } from './styles';

export function Loading() {
  return (
    <>
      {Array.from({ length: 20 }, (_, index) => (
        <SkeletonElement key={index} />
      ))}
    </>
  );
}
