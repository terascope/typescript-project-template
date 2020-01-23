import 'jest-extended'; // for type-definitions
import { Example } from '../src';

describe('Example', () => {
    const example = new Example();

    describe('->initialize', () => {
        it('should resolve true', () => expect(example.initialize()).resolves.toBeTrue());
    });

    describe('->shutdown', () => {
        it('should resolve true', () => expect(example.shutdown()).resolves.toBeTrue());
    });
});
