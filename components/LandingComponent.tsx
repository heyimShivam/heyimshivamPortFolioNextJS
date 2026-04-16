"use client";
import Link from "next/link";
import Image from "next/image";
import { Google_Sans } from "next/font/google";
import { Rubik } from "next/font/google";
import { useState } from "react";

import MarqueeComponent from "./MarqueeComponent";
import styles from './LandingComponet.module.css';
import HoverRevealPattern from "./HoverRevealPattern";

const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const inter = Google_Sans({
    subsets: ["latin"],
});

function LandingComponent() {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [visible, setVisible] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPos({ x, y });
    };

    const marqueeeText = [
        "Frontend Developer crafting modern, responsive web apps with React and Next.js.",
        "Passionate about building clean UI/UX with Tailwind CSS and smooth animations.",
        "Focused on performance, accessibility, and scalable frontend architecture."
    ];

    const user = {
        name: "Shivam Chaudhary",
        title: "Full Stack Developer & UI/UX Designer",
        desc: "I craft beautiful, functional digital experiences that solve real-world problems. Passionate about clean code and exceptional user experiences."
    };

    const actionBtns = [
        { title: 'View My Work', link: '#' },
        { title: 'Get In Touch', link: '#' }
    ];

    const SocialUrls = [
        { url: '#', src: '/linkedin.png', altText: 'Shivam Chaudhary LinkedIn', width: 20, height: 20 },
        { url: '#', src: '/video.png', altText: 'Shivam Chaudhary Instagram', width: 20, height: 20 },
        { url: '#', src: '/email.png', altText: 'Shivam Chaudhary Email', width: 20, height: 20 },
        { url: '#', src: '/github.png', altText: 'Shivam Chaudhary Github', width: 20, height: 20 }
    ];

    return (
        <div>
            <div
                className="w-full relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {/* Honeycomb pattern — fixed overlay, non-blocking */}
                <HoverRevealPattern pos={pos} visible={visible} />

                <div className="h-screen relative gap-6">
                    <div className="w-full h-screen flex flex-col justify-center items-center relative z-10">
                        {/* Intro */}
                        <h1 className={`text-6xl text-center font-semibold ${font.className}`}>
                            Hi, I&apos;m <span className="text-blue-500">{user.name}</span>
                        </h1>
                        <h3 className={`text-3xl font-light text-center p-2 mt-3 text-gray-500 ${font.className}`}>
                            {user.title}
                        </h3>
                        <h2 className={`max-w-170 text-xl text-center text-gray-300 mt-1 ${font.className}`}>
                            {user.desc}
                        </h2>

                        {/* Social Media Icons */}
                        <div className="flex flex-row flex-wrap justify-center mt-5">
                            {SocialUrls.map((val, index) => (
                                <Link
                                    href={val.url}
                                    key={index}
                                    className="border-2 border-gray-500 p-3 m-3 rounded-full"
                                >
                                    <Image
                                        src={String(val?.src)}
                                        width={val?.width}
                                        height={val?.height}
                                        className="filter brightness-1 invert"
                                        alt={String(val?.altText)}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-row flex-wrap justify-center mt-4">
                            {actionBtns.map((val, index) => (
                                <Link
                                    href={val.link}
                                    key={index}
                                    className={`cursor-pointer border-2 rounded-md m-5 p-2 pl-9 pr-9 ${font.className} ${val.title === 'View My Work' ? 'bg-blue-500 border-blue-500' : 'border-gray-500'}`}
                                >
                                    {val.title}
                                </Link>
                            ))}
                        </div>

                        {/* Scroll Indicator */}
                        <div className={`${styles.animateUPDown}`}>
                            <div className="w-4 h-4 border-r-2 border-b-2 border-gray-500 rotate-45 mt-9"></div>
                        </div>
                    </div>

                    <div className={`h-72 w-full overflow-hidden relative ${styles.marqueeComponentOuterDiv}`}>
                        <div className={`${styles.marqueeComponentInnerDiv} ${inter.className} text-5xl text-gray-500 font-bold uppercase rotate-[-3deg]`}>
                            <MarqueeComponent textsArray={marqueeeText} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 pt-50 relative z-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex in unde, necessitatibus quod sunt tempora dolore vero eveniet nobis, quia ad aliquam. Ab quas tenetur aperiam ut dolor consectetur incidunt impedit vero vel, error quod nobis facere accusamus perferendis nisi natus fugit officia atque temporibus inventore doloribus! Sapiente molestiae voluptates voluptatem qui est, odit iure impedit saepe velit, vitae perspiciatis provident recusandae sed modi ad nihil libero nesciunt neque sint id! Vitae, culpa ea? Accusamus ex dolor explicabo facilis veritatis esse aut laudantium nam inventore distinctio repellendus, blanditiis ea sapiente fuga laboriosam laborum vitae pariatur mollitia fugiat consequuntur, rem facere.
            </div>
        </div>
    );
}

export default LandingComponent;