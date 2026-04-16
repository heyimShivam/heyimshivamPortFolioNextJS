"use client";
import Image from "next/image";

interface Props {
    pos: { x: number; y: number };
    visible: boolean;
}

export default function HoverRevealPattern({ pos, visible }: Props) {
    const maskValue = visible
        ? `radial-gradient(circle 300px at ${pos.x}% ${pos.y}%, black 0%, black 5%, transparent 70%)`
        : "none";

    return (
        <div className="absolute top-0 inset-0 w-full h-full pointer-events-none z-0">
            {visible ? <Image
                src="/honeycomb.png"
                fill
                alt="Shivam"
                className="object-cover opacity-60 invert brightness-100"
                style={{
                    maskImage: maskValue,
                    WebkitMaskImage: maskValue,
                }}
            /> : <></>}
        </div>
    );
}