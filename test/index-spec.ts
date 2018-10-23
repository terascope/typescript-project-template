import 'jest-extended'; // for type-definitions
import * as index from '../src';

describe('index', () => {
    it('should have Example', () => {
        expect(index).toHaveProperty('Example');
    });
});
