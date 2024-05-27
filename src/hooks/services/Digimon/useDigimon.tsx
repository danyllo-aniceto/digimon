import { useState } from 'react';
import { IDigimon } from '../../../models/IDigimon';
import GetAllDigimon from '../../../services/Digimon/get-all-digimon';
import GetDigimonByName from '../../../services/Digimon/get-digimon-by-name';
import GetDigimonsByLevel from '../../../services/Digimon/get-digimons-by-level';

export const useDigimon = () => {
  const [allDigimons, setAllDigimons] = useState<Array<IDigimon>>([]);
  const [listLevels, setListLevels] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);

  const getAllDigimons = async (firstCall?: boolean) => {
    setLoading(true);

    const service = new GetAllDigimon();
    try {
      const response = await service.loadAll();

      setAllDigimons(response);

      if (firstCall) {
        const levelsNotDuplicated = Array.from(new Set(response.map(item => item.level)));
        setListLevels(levelsNotDuplicated);
      }
    } catch (error) {
      alert('Erro ao buscar dados da api');
      setAllDigimons([]);
    } finally {
      setLoading(false);
    }
  };

  const getDigimonByName = async (name: string) => {
    setLoading(true);

    const service = new GetDigimonByName();
    try {
      const response = await service.loadDigimon(name);
      setAllDigimons(response);
    } catch (error) {
      alert('Erro ao buscar dado da api');
      setAllDigimons([]);
    } finally {
      setLoading(false);
    }
  };

  const getDigimonsByLevel = async (level: string) => {
    setLoading(true);

    const service = new GetDigimonsByLevel();
    try {
      const response = await service.loadDigimonsByLevel(level);
      setAllDigimons(response);
    } catch (error) {
      alert('Erro ao buscar dados da api');
      setAllDigimons([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    allDigimons,
    listLevels,
    loading,
    getAllDigimons,
    getDigimonByName,
    getDigimonsByLevel,
  };
};
