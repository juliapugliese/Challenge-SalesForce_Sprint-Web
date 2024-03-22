import { Montserrat, Scada } from "next/font/google";

export const montserrat = Montserrat({ 
    subsets: ["latin"],
    weight: ["100","300", "400", "500", "600", "700"]
});

export const scada = Scada({ 
    subsets: ["latin"],
    weight: ["400", "700"]
});