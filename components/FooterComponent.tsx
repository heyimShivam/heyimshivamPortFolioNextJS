import Link from "next/link";
import Image from "next/image";
import { Rubik } from "next/font/google";
const font = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const FooterComponent = () => {
    const SocialUrls = [
        { url: '#', src: '/linkedin.png', altText: 'Shivam Chaudhary LinkedIn', width: 20, height: 20 },
        { url: '#', src: '/video.png', altText: 'Shivam Chaudhary Instagram', width: 20, height: 20 },
        { url: '#', src: '/email.png', altText: 'Shivam Chaudhary Email', width: 20, height: 20 },
        { url: '#', src: '/github.png', altText: 'Shivam Chaudhary Github', width: 20, height: 20 }
    ];
    return (<div className="bg-black p-4 flex justify-around items-center">
        <div className={`font-semibold text-lg ${font.className}`}>Made with Love</div>
        <div className="flex flex-row flex-wrap justify-center">
            {SocialUrls.map((val, index) => (
                <Link href={val.url}
                    key={index}
                    className="p-3 mr-6">
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
    </div>)
}

export default FooterComponent;