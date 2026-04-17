"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Rubik } from "next/font/google";
const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const ContactComponent = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
        query: "General"
    });
    const [dropdownHidden, setDropdownHidden] = useState(true);

    const QueryLists = ["General", "Project"];

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log(contactForm);

        clearContactForm();
    }

    function clearContactForm() {
        setContactForm({
            name: "",
            email: "",
            message: "",
            query: "General"
        });
    }

    function updateValue(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;

        setContactForm((prev) => {
            return {
                ...prev,
                [target.name]: target.value
            }
        })
    }

    function selectQuery(value: string) {
        setContactForm((prev) => ({
            ...prev,
            query: value,
        }));

        setDropdownHidden(true);
    }

    return (
        <div className={`w-full overflow-hidden relative mt-5 p-25 bg-zinc-900 flex justify-center items-center flex-col ${font.className}`}>
            <div className="z-30">
                <h3 className="text-4xl mb-3 text-white font-semibold">Get in touch</h3>
                <p className="text-md mb-5">{"Have a project in mind or just want to say hi? Drop a message — I'd love to hear from you."}</p>
                <div className="w-full flex justify-center">
                    <form className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 width-25" onSubmit={submitForm}>
                        <input className="border p-2 rounded border-gray-500 bg-zinc-900"
                            id="name"
                            type="text"
                            minLength={3}
                            placeholder="Enter name"
                            name="name"
                            value={contactForm.name}
                            onChange={updateValue}
                            tabIndex={1}
                            required />
                        <input className="border p-2 rounded border-gray-500 bg-zinc-900"
                            type="email"
                            minLength={4}
                            placeholder="Enter email"
                            name="email"
                            value={contactForm.email}
                            onChange={updateValue}
                            tabIndex={2}
                            required />
                        <textarea className="border p-2 rounded md:col-span-2 border-gray-500 bg-zinc-900"
                            required
                            minLength={15}
                            placeholder="Enter message"
                            name="message"
                            value={contactForm.message}
                            tabIndex={3}
                            onChange={updateValue}
                        />
                        <div className="relative">
                            <div className="cursor-pointer flex justify-between width-full items-center bg-gray-700 p-2 pl-7 pr-8 rounded" onClick={() => { setDropdownHidden((prev) => !prev) }}>
                                {contactForm.query}
                                <div className="w-2 h-2 border-b-2 border-r-2 border-white rotate-45 ml-4 mb-1"></div>
                            </div>
                            <div hidden={dropdownHidden} className="absolute top-12 w-full border-2 border-gray-700 rounded">
                                {
                                    QueryLists.map((val, index) => <div key={index} data-name="query" onClick={() => selectQuery(val)} className={`cursor-pointer flex justify-between width-full items-center bg-gray-700 p-2 pl-7 pr-8 ${index !== QueryLists.length - 1 ? 'border-b-1 border-gray-600 ' : ''}`}>
                                        {val}
                                    </div>)
                                }
                            </div>
                        </div>
                        <div></div>
                        <button type="submit"
                            className="md:col-span-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-700" tabIndex={4}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Image
                src="/message-svgrepo-com.svg"
                className="block max-[1400px]:hidden invert absolute opacity-30 right-1/9 top-1/12 z-10"
                width={600}
                height={600}
                alt="contact-us-bg-image"
            />
            <Image
                src="/message-svgrepo-com.svg"
                className="hidden min-[565px]:block invert absolute opacity-30 left-1/7 bottom-1/2 z-10 rotate-[90deg]"
                width={400}
                height={400}
                alt="contact-us-bg-image"
            />
        </div >);
}

export default ContactComponent;