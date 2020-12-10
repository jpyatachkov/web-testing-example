import {AgeService} from './age.service';
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');

describe('AgeService', () => {
    let service: AgeService;

    beforeEach(() => {
        service = new AgeService();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('predictAge', () => {
        let name: string;

        beforeEach(() => {
            name = faker.name.findName();
        });

        it('should return age if response seccessfull', async () => {
            const data = {name, age: faker.random.number(89), count: faker.random.number()};

            const getSpy = jest
                .spyOn(axios, 'get')
                .mockImplementation(async () => ({data}) as any);

            const age = await service.predictAge(name);

            expect(age).toEqual(data.age);
            expect(getSpy).toBeCalledWith('https://api.agify.io/', {params: {name}});
        });

        it('should return null if any arror occured', async () => {
            jest
                .spyOn(axios, 'get')
                .mockImplementation(async () => {
                    throw new Error();
                });
            expect(await service.predictAge(name)).toBeNull();
        });
    });
});
