import { API_URL } from '../../constants/apiUrl';
import { IDigimon } from '../../models/IDigimon';

export default class GetDigimonByName {
  private route = `${API_URL}/api/digimon/name`;

  public async loadDigimon(name: string): Promise<Array<IDigimon>> {
    const response = await fetch(`${this.route}/${name}`);
    return response.json();
  }
}
