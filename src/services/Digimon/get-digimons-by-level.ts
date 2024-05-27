import { API_URL } from '../../constants/apiUrl';
import { IDigimon } from '../../models/IDigimon';

export default class GetDigimonsByLevel {
  private route = `${API_URL}/api/digimon/level`;

  public async loadDigimonsByLevel(level: string): Promise<Array<IDigimon>> {
    const response = await fetch(`${this.route}/${level}`);
    return response.json();
  }
}
