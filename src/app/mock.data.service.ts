import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const planets = [
      { id: 11, name: 'Tchulak' },
      { id: 12, name: 'P4X480' },
      { id: 13, name: 'Abidos' },
      { id: 14, name: 'P5X230' },
      { id: 20, name: 'Tal-Lak' }
    ];
    return {planets};
  }
}
