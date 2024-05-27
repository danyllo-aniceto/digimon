import { Card } from '../../../../components/Card';
import { EmptyState } from '../../../../components/EmptyState';
import { Loading } from '../../../../components/Loading';
import { IIDigimonListProps } from './types';

export function DigimonList({ loading, allDigimons }: IIDigimonListProps) {
  if (loading) {
    return <Loading quantity={20} height={334} width={250} />;
  }

  if (allDigimons && allDigimons.length > 0) {
    return (
      <>
        {allDigimons?.map(({ img, level, name }) => (
          <Card key={name} img={img} name={name} level={level} />
        ))}
      </>
    );
  }

  return <EmptyState>Nenhum digimon encontrado</EmptyState>;
}
