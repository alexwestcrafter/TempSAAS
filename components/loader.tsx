import { Video } from "lucide-react";
import Image from "next/image";

export const Loader = () => {
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 realtive animate-spin">
                <video
                    autoPlay
                    loop
                    width={30}
                    src="/Lod.gif" 
                />
            </div>
            <p className="text-sm text-muted-foreground">
                umm...
            </p>
        </div>
    );
};