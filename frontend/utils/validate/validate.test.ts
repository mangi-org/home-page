import { validatePhone, validateEmail, checkLength } from "./validate";

describe('validatePhone', () => {
    it('should return true if the phone number is valid', () => {
        expect(validatePhone('1234567890')).toBe(false);
        expect(validatePhone('+7 (123) 456-7890')).toBe(true);
        expect(validatePhone('8-123-456-7890')).toBe(true);
        expect(validatePhone('+7-123-456-7890')).toBe(true);
        expect(validatePhone('123-456-7890')).toBe(false);
        expect(validatePhone('123 456 7890')).toBe(false);
        expect(validatePhone('123 4567890')).toBe(false);
        expect(validatePhone('123456 7890')).toBe(false);
    });

    it('should return false if the phone number is invalid', () => {
        // Test cases for invalid phone numbers
        expect(validatePhone('')).toBe(false);
        expect(validatePhone('abc')).toBe(false);
        expect(validatePhone('123')).toBe(false);
        expect(validatePhone('     8-123-456-7890    ')).toBe(false);
        expect(validatePhone('12345678901234567890')).toBe(false);
        expect(validatePhone('123-456-789')).toBe(false);
        expect(validatePhone('123 456 78')).toBe(false);
        expect(validatePhone('123 456 78901')).toBe(false);
    });
});

describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
        expect(validateEmail('test@example.com')).toBeTruthy();
    });

    it('should return false for an invalid email address', () => {
        expect(validateEmail('invalid_email')).toBeFalsy();
    });

    it('should return false for an email address with leading/trailing whitespace', () => {
        expect(validateEmail('   test@example.com   ')).toBeFalsy();
    });

    it('should return true for an email address with non-ASCII characters', () => {
        expect(validateEmail('тест@example.com')).toBeTruthy();
    });

    it('should return false for an email address with more than two consecutive dots in the domain', () => {
        expect(validateEmail('test@example..com')).toBeFalsy();
    });
});

describe('checkLength', () => {
    it('should return true if the string length is within the specified range', () => {
        expect(checkLength('abc', 1, 5)).toBe(true);
        expect(checkLength('hello', 3, 6)).toBe(true);
        expect(checkLength('example', 5, 10)).toBe(true);
    });

    it('should return false if the string length is outside the specified range', () => {
        expect(checkLength('a', 2, 4)).toBe(false);
        expect(checkLength('code', 6, 10)).toBe(false);
        expect(checkLength('testing', 1, 3)).toBe(false);
    });
});