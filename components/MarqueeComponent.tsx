import styles from './MarqueeComponent.module.css';

type MarqueeProps = {
    textsArray: string[];
};

const MarqueeComponent = ({ textsArray }: MarqueeProps) => {
    return (<>
        {
            textsArray.map((text: string, index: number) => {
                return (
                    <div key={index} className="overflow-hidden w-screen pt-1">
                        <div className={`flex w-max whitespace-nowrap ${index % 2 ? `${styles.animateMarqueeReverse}` : `${styles.animateMarquee}`}`}>
                            <div className="flex gap-5 pr-5 shrink-0">
                                <div className="flex gap-5">
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                </div>
                            </div>

                            <div className="flex gap-5 pr-5 shrink-0" aria-hidden="true">
                                <div className="flex gap-5">
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                    <p className='tracking-[0.3rem] [word-spacing:9px]'>{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </>)
}
export default MarqueeComponent;