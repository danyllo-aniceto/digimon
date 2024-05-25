import { API_URL } from '../../constants/apiUrl';
import { IDigimon } from '../../models/IDigimon';

export default class GetAllDigimon {
  private route = `${API_URL}/api/digimon`;

  public async loadAll(): Promise<Array<IDigimon>> {
    const response = await fetch(this.route);
    return response.json();
  }
}
