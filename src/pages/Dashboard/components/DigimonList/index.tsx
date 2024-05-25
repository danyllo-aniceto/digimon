import { Card } from '../../../../components/Card';
import { Loading } from '../../../../components/Loading';
import { IIDigimonList } from './types';

export function DigimonList({ loading, allDigimons }: IIDigimonList) {
  if (loading) {
    return <Loading />;
  }

  if (allDigimons && allDigimons.length > 0) {
    return allDigimons?.map(({ img, level, name }) => (
      <Card key={name} img={img} name={name} level={level} />
    ));
  }

  return <span>Nenhum dado encontrado</span>;
}
