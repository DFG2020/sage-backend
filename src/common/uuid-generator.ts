import {v4 as uuidv4} from 'uuid';

/**
 * Utility class to standardize UUID generation throughout the application.
 */
export class UuidGenerator {
    /**
     * Generates a 32 character UUID.
     */
    static generateUuid(): string {
        return uuidv4().replace(/-/g, "");
    }
}
