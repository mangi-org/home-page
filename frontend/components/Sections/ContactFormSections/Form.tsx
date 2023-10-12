'use client'
import React from 'react'
import { Button } from '@/components/UI';
import axios from '@/axios';

function Form() {
    async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        let name = formData.get("name") as string;
        let email = formData.get("email") as string;
        let phone = formData.get("phone") as string;
        let message = formData.get("message") as string;

        if (!name || !email || !phone) {
            return;
        }

        name = name.trim();
        email = email.trim();
        phone = phone.trim();
        message = message.trim();


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
            <Button type="submit" className="self-center">Отправить</Button>
        </form>
    )
}

export default Form