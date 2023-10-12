import { BACKEND_URL } from "@/config";
import { checkLength, validateEmail, validatePhone } from "@/utils";

interface Contact {
    name: string;
    email: string;
    phone: string;
    message?: string;
}


function checkNewContact({ name, email, phone, message }: Contact) {
    if (!name || !email || !phone) {
        return false;
    }
    if (!validateEmail(email)) {
        return false;
    }

    if (!validatePhone(phone)) {
        return false;
    }

    if (!checkLength(name, 1, 256)) {
        return false;
    }

    if (message === undefined) {
        message = "";
    }

    if (!checkLength(message, 0, 1000)) {
        return false;
    }

    return true;
}

async function postNewContact({ name, email, phone, message = "" }: Contact) {
    if (message === undefined) {
        message = "";
    }

    if (!checkNewContact({ name, email, phone, message })) {
        return { error: true, message: "Error validating form" };
    }


    const newContact = {
        name: name,
        email: email,
        phone: phone,
        message: message
    }

    const url = BACKEND_URL + "api/contact";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    })

    if (!response.ok) {
        return { error: true, message: response.statusText };
    }

    const data = await response.json()
    const result = { error: false, message: data }
    return result;
}

export {
    checkNewContact,
    postNewContact
}