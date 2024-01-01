
import Image from "next/image";
import pdf2csvImage from "../../public/projects/pdf2csvImage.png";

import Link from 'next/link'
import UprightArrow from "../../../public/uprightArrow";

export default function ProjectCard(props: {
    title: string;
    description: string;
    image: typeof pdf2csvImage;
    liveOrGithubLink: string;
    linkType: 'Live' | 'Github';
    techstack: React.ReactNode[];

}) {

    return (
        <div className="group w-full flex flex-col sm:grid sm:grid-cols-5 gap-5 rounded-xl">
            <div className="col-span-2 relative overflow-hidden h-[250px]">
                <div className="flex items-center justify-center transition-all w-full h-full absolute bottom-[-100%] group-hover:bottom-0 bg-gradient-to-t rounded-xl border-t-2 border-zinc-600 from-black/80 to-black/50">
                    <Link target="blank" href={props.liveOrGithubLink} className="text-sky-400 hover:underline">{props.linkType}</Link>
                    <UprightArrow size={20}></UprightArrow>
                </div>
                <Image placeholder="blur" className="w-full h-full rounded-xl object-cover" src={props.image} alt="Image to describe the flow of project" />
            </div>
            <div className="col-span-3 flex flex-col">
                <h2 className="text-lg font-semibold">{props.title}</h2>
                <p className="text-zinc-200">{props.description}</p>
                <div className="mt-2 flex flex-row gap-2 justify-center items-center bg-zinc-500 bg-opacity-30 w-min p-2 rounded-full shadow-inner shadow-">
                    {props.techstack}
                </div>
            </div>
        </div>
    );
}
