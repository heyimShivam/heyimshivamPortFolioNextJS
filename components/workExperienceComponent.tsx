import { Rubik } from "next/font/google";
import Image from "next/image";
const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const WorkExperienceComponent = () => {
    return (
        <div className={`flex justify-center items-center flex-col ${font.className} p-15`}>
            <div className=" max-w-[1200px] p-10 overflow-hidden rounded flex justify-center items-center flex-col">
                <h1 className="text-5xl font-extrabold p-3 mb-15">Work Experience</h1>
                <div className="max-w-[1200px]">
                    <div className="flex flex-col">
                        <div className="relative w-[300px] h-[90px] mb-4">
                            <Image
                                src="/oracle.png"
                                alt="Oracle Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-4xl mb-1 font-bold">Oracle Financial Services Software</h2>
                            <h3 className="text-xl mb-8"><span className="text-blue-500">Designation: </span>Associate Consultant</h3>
                            <p className="text-lg mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam, totam aperiam aliquid magnam officia accusamus minima iste illo, qui velit? Quidem esse aspernatur sapiente molestiae quos ex quod neque omnis doloremque nihil nesciunt atque soluta eum sint earum fugit accusamus libero magnam, delectus modi! Dignissimos asperiores provident voluptas harum omnis optio, placeat soluta eius corporis vel incidunt exercitationem tempore odio suscipit magni, iste reprehenderit ullam nulla expedita excepturi ipsa nihil in iure? Impedit qui modi ex recusandae fugit error ratione porro, sit voluptas tempore cumque. Tenetur molestias sequi ratione eius inventore, nulla reprehenderit. Odio laudantium iusto earum dolorum enim?
                            </p>
                            <p className="text-lg mb-1 font-semibold">Bengaluru</p>
                            <p className="text-lg">Aug 2025 - <span>Current</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperienceComponent;