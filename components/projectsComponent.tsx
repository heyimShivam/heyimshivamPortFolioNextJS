import { Rubik } from "next/font/google";
const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const ProjectsComponent = () => {
    return (
        <div className={`flex justify-center items-center flex-col ${font.className} p-15`}>
            <div className=" max-w-[1200px] overflow-hidden border-2 p-10 rounded flex justify-center items-center flex-col">
                <h2 className="text-5xl font-semibold p-3">Projects</h2>
                <div className="max-w-[1200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam, totam aperiam aliquid magnam officia accusamus minima iste illo, qui velit? Quidem esse aspernatur sapiente molestiae quos ex quod neque omnis doloremque nihil nesciunt atque soluta eum sint earum fugit accusamus libero magnam, delectus modi! Dignissimos asperiores provident voluptas harum omnis optio, placeat soluta eius corporis vel incidunt exercitationem tempore odio suscipit magni, iste reprehenderit ullam nulla expedita excepturi ipsa nihil in iure? Impedit qui modi ex recusandae fugit error ratione porro, sit voluptas tempore cumque. Tenetur molestias sequi ratione eius inventore, nulla reprehenderit. Odio laudantium iusto earum dolorum enim?</div>
            </div>
        </div>
    );
}

export default ProjectsComponent;