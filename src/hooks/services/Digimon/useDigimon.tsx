import { useState } from 'react';
import { IDigimon } from '../../../models/IDigimon';
import GetAllDigimon from '../../../services/Digimon/get-all-digimon';

export const useDigimon = () => {
  const [allDigimons, setAllDigimons] = useState<Array<IDigimon>>([]);
  const [loading, setLoading] = useState(false);

  const getAllDigimons = async () => {
    setLoading(true);

    const service = new GetAllDigimon();
    try {
      const response = await service.loadAll();
      setAllDigimons(response);
    } catch (error) {
      alert('Erro ao buscar dados da api');
    } finally {
      setLoading(false);
    }
  };

  return {
    getAllDigimons,
    allDigimons,
    loading,
  };
};
