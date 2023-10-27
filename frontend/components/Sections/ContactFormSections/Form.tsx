'use client'
import React, { useState, useRef } from 'react'
import { Button, Paragraph } from '@/components/UI';
import axios from '@/axios';

function Form() {

    const [number1, setNumber1] = useState(Math.floor(Math.random() * 100));
    const [number2, setNumber2] = useState(Math.floor(Math.random() * 100));



    /**
     * Send an email based on the form data provided.
     *
     * @param {React.FormEvent<HTMLFormElement>} event - The form event triggered by submitting the form.
     * @return {Promise<void>} - A promise that resolves when the email is sent.
     */
    async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        let name = formData.get("name") as string;
        let email = formData.get("email") as string;
        let phone = formData.get("phone") as string;
        let message = formData.get("message") as string;
        let mathCaptha = Number(formData.get("mathCaptha") as string);

        if (!name || !email || !phone) {
            return;
        }

        name = name.trim();
        email = email.trim();
        phone = phone.trim();
        message = message.trim();

        if (mathCaptha !== number1 + number2) {
            alert("Неправильный результат!");
            return;
        } else {
            setNumber1(Math.floor(Math.random() * 100));
            setNumber2(Math.floor(Math.random() * 100));
        }

        const result = await axios.postNewContact({ name, email, phone, message });

        if (result.error) {
            alert(result.message);
        }
        else {
            alert("Спасибо за обратную связь!");
        }
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={sendEmail}>
            <input type="text" className="rounded-lg p-2 text-black" name="name" id="name" placeholder="Имя" required />
            <input type="email" className="rounded-lg p-2 text-black" name="email" id="email" placeholder="E-mail" required />
            <input type="tel" className="rounded-lg p-2 text-black" name="phone" id="phone" placeholder="Телефон" required />
            <textarea className="rounded-lg p-2 text-black" name="message" id="message" placeholder="Расскажите немного о вашей задаче"></textarea>
            <div className="flex flex-row gap-4 items-center">
                <Paragraph>{number1} + {number2} = </Paragraph>
                <input type="number" name='mathCaptha' id='mathCaptha' className="rounded-lg p-2 text-black grow" placeholder='?' required />
            </div>
            <Button type="submit" className="self-center md:self-end">Отправить</Button>
        </form>
    )
}

export default Form