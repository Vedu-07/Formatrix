import logoImage from "../_assets/Logo.png"
import Image from "next/image";


export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                <div className="cursor-pointer">
                    <Image src={logoImage} alt="Formatrix Logo" width={200} height={200}/>
                </div>
                <div>
                    <p className="text-white/50 text-sm">
                    ® All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </section>;
}
