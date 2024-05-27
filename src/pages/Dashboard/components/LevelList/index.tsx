import { Button } from '../../../../components/Button';
import { EmptyState } from '../../../../components/EmptyState';
import { Loading } from '../../../../components/Loading';
import { ILevelListProps } from './types';

export function LevelList(props: ILevelListProps) {
  const { listLevels, allDigimons, loading = false, levelSelected, onClickLevel } = props;

  if (loading) {
    return <Loading quantity={9} height={68} width={169} />;
  }

  if (listLevels && listLevels.length > 0) {
    let levelBySearchDigimon = '';

    if (allDigimons.length === 1) {
      levelBySearchDigimon = allDigimons[0].level;
    }

    return (
      <>
        <Button isSelected={levelSelected === 'Todos'} onClick={() => onClickLevel('Todos')}>
          Todos
        </Button>
        {listLevels.map(level => (
          <Button
            key={level}
            isSelected={levelSelected === level || levelBySearchDigimon === level}
            onClick={() => onClickLevel(level)}
          >
            {level}
          </Button>
        ))}
      </>
    );
  }

  return <EmptyState>Nenhum level encontrado</EmptyState>;
}
