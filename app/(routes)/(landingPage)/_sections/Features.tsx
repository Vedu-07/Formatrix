import FeatureCard from "../_components/FeatureCard";
import Tag from "../_components/Tag";
import avatar1 from "../_assets/avatar-ashwin-santiago.jpg"
import avatar2 from "../_assets/avatar-lula-meyers.jpg"
import avatar3 from "../_assets/avatar-florence-shaw.jpg"
import avatar4 from "../_assets/avatar-owen-garcia.jpg"
import Image from "next/image";
import Avatar from "../_components/Avatar";
import Key from "../_components/Key";
const features = [
    "AI Powered Forms",
    "Form Preview",
    "Track Form Analytics",
    "Smart Form Creation",
    "Auto Layout",
    "Drag & Drop",
    "Share Form",
];

export default function Features() {
    return  <section className="py-24" id="features">
        <div className="container ">
            <div className="flex justify-center">
            <Tag>
                Features
            </Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                Where power meets <span className="text-[#c19eff]">simplicity</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-8">

                <FeatureCard 
                    title="Quick Sharing" 
                    description="Share your forms at lightning fast speed"
                    className="md:col-span-2 lg:col-span-1 group">
                    
                     <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
                        </Avatar >
                        <Avatar className="-ml-6 border-indigo-500 z-30">
                            <Image src={avatar2} alt="Avatar 2" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-amber-500 z-20">
                            <Image src={avatar3} alt="Avatar 3" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                <Image src={avatar4} alt="Avatar 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition "/>
                                {Array.from({length:3}).map((_,i) => (
                                    <span key={i} className="size-1.5 rounded-full bg-white inline-flex"></span>
                                ))}
                            </div>
                        </Avatar>
                     </div>
                </FeatureCard>

                <FeatureCard 
                    title="Ai Driven Form Creation" 
                    description="Create Form's seamlessly with conflict-free editing"
                    className="md:col-span-2 lg:col-span-1">
                    <div className="aspect-video flex items-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center hover:text-white/90 transition duration-700">
                        Pioneering a   <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">New Era In World</span> of Forms!
                        </p>
                    </div>
                </FeatureCard> 

                <FeatureCard 
                    title="Interactive Editing Tools" 
                    description="Edit your forms with cutting-edge editing tools"
                    className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group">
                        <div className="aspect-video flex items-center justify-center gap-4">
                                <Key className="w-24 font-semibold outline outline-2 outline-offset-4 outline-transparent group-hover:outline-[#c19eff] group-hover:translate-y-1 duration-500 transition-all">Edit</Key>
                                <Key className="w-16 font-semibold outline outline-2 outline-offset-4 outline-transparent group-hover:outline-[#c19eff] group-hover:translate-y-1 duration-500 transition-all delay-150" >Drag</Key>
                                <Key className="w-16 font-semibold outline outline-2 outline-offset-4 outline-transparent group-hover:outline-[#c19eff] group-hover:translate-y-1 duration-500 transition-all delay-300">Drop</Key>
                        </div>
                </FeatureCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center  items-center  m-auto">
                {features.map(feature => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                        <span className="bg-[#c19eff] text-neutral-950 size-5 rounded-full inline-flex items-center text-xl group-hover:rotate-45 transition duration-500">
                            &#10038;
                        </span>
                        <span className="font-medium md:text-lg">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
