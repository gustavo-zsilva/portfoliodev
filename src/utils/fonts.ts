import { Poppins, Roboto_Mono } from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap',
});
  
export const mono = Roboto_Mono({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})