import { useState } from 'react';
import { IDigimon } from '../../../models/IDigimon';
import GetAllDigimon from '../../../services/Digimon/get-all-digimon';
import GetDigimonByName from '../../../services/Digimon/get-digimon-by-name';

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

  return {
    allDigimons,
    loading,
    getAllDigimons,
    getDigimonByName,
  };
};
