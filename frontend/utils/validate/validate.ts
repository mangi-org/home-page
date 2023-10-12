/**
 * Validates an email address.
 *
 * @param {string} email - The email address to be validated.
 * @return {boolean} True if the email is valid, false otherwise.
 */
function validateEmail(email: string) {
    const new_email = email;
    const re = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    return re.test(new_email);
}

/**
 * Validates a phone number.
 *
 * @param {string} phone - The phone number to be validated.
 * @return {boolean} Returns true if the phone number is valid, otherwise returns false.
 */
function validatePhone(phone: string) {

    let valid_phone = phone;
    if (!valid_phone) {
        return false;
    }

    if (valid_phone[0] !== "+" && valid_phone[0] !== "7" && valid_phone[0] !== "8") {
        return false;
    }

    if (valid_phone[0] === "+" && valid_phone[1] !== "7") {
        return false;
    }

    if (valid_phone[0] === "8" || valid_phone[0] === "7") {
        valid_phone = valid_phone.slice(1);
    } else if (valid_phone[0] === "+") {
        valid_phone = valid_phone.slice(2);
    }

    const replace_all = (str: string, replace: string, changes: string): string => {
        let new_str = str;
        while (new_str.indexOf(replace) !== -1) {
            new_str = new_str.replace(replace, changes);
        }
        return new_str;
    }
    valid_phone = replace_all(valid_phone, " ", "");
    valid_phone = replace_all(valid_phone, "(", "");
    valid_phone = replace_all(valid_phone, ")", "");
    valid_phone = replace_all(valid_phone, "-", "");
    if (valid_phone.length !== 10) {
        return false;
    }
    return true;
}

/**
 * Checks if a given string has a length within a specified range.
 *
 * @param {string} str - The string to be checked.
 * @param {number} min - The minimum length allowed.
 * @param {number} max - The maximum length allowed.
 * @return {boolean} Returns true if the string length is within the specified range, otherwise false.
 */
function checkLength(str: string, min: number, max: number) {
    if (str.length < min || str.length > max) {
        return false;
    }
    return true;
}

export {
    validateEmail,
    validatePhone,
    checkLength
}