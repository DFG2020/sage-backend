import {UuidGenerator} from "./uuid-generator";

describe('UuidGenerator', () => {
    it('should generate UUID with 32 character length', () => {
        const uuid: string = UuidGenerator.generateUuid();

        expect(uuid.length).toEqual(32);
    });

    it('should generate with valid characters', () => {
        const uuid: string = UuidGenerator.generateUuid();

        // The UUID should only contain valid hexadecimal characters.
        expect(uuid).toMatch(/[123456789abcdef]+/i)
    });
});
