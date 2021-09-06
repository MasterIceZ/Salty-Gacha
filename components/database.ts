import { isContentEditable } from "@chakra-ui/utils";

export interface ElementType{
    name: string,
    picture_path: string,
    rate: string
}

export const Element:ElementType[] = [
    {
        name: 'Ice',
        picture_path: 'https://github.com/MasterIceZ/Salty-Gacha/blob/main/public/picture/Ice.jpg?raw=true',
        rate: 'SSR'
    },
    {
        name: 'Fai',
        picture_path: 'https://github.com/MasterIceZ/Salty-Gacha/blob/main/public/picture/Fai.jpg?raw=true',
        rate: 'C'
    },
    {
        name: 'Ink',
        picture_path: 'https://github.com/MasterIceZ/Salty-Gacha/blob/main/public/picture/Ink.jpg?raw=true',
        rate: 'R'
    }
]