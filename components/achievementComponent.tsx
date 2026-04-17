import { Rubik } from "next/font/google";
import Image from "next/image";

const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const AchievementComponent = () => {
    return (
        <div className={`flex justify-center items-center flex-col ${font.className} px-4 sm:px-10`}>
            <div className="p-4 sm:p-10 max-w-[1200px] w-full overflow-hidden rounded flex flex-col items-center">

                <h1 className="text-3xl sm:text-5xl font-extrabold p-3 mb-10 sm:mb-15">
                    Achievements
                </h1>

                <div className="flex w-full overflow-x-auto gap-4 md:gap-6 px-2 sm:px-4 scroll-smooth">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="w-[240px] sm:w-[280px] md:w-[300px] flex-shrink-0"
                        >
                            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] mb-10">
                                <Image
                                    src="/gsoc.png"
                                    alt="Achievement"
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <h2 className="text-2xl font-medium">Google Summer of Code</h2>
                            <p className="text-blue-500 text-md font-extralight mb-5">Contributor</p>
                            <p className="text-sm sm:text-base mb-4 text-">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem consequatur debitis non et porro dolores quidem veritatis, tempore hic cum velit aliquid? Dicta, sed, excepturi accusamus error possimus consectetur architecto at aliquid eligendi a quis odit, amet autem perspiciatis.
                            </p>
                            <p className="text-sm sm:text-base">
                                Aug 2024 - Aug 2025
                            </p>
                            <p className="text-sm sm:text-base">
                                Remote
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AchievementComponent;
