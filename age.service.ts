import axios from 'axios';

export class AgeService {

    public async predictAge(name: string): Promise<number | null> {
        try {
            const response = await axios.get('https://api.agify.io/', {params: {name}});
            return response.data.age;
        } catch (e) {
            return null;
        }
    }
}
