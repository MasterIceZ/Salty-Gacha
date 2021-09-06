import { isContentEditable } from "@chakra-ui/utils";

export interface ElementType{
    name: string,
    picture_path: string,
    rate: string
}

export const Element:ElementType[] = [
    {
        name: 'Ice',
        picture_path: 'Ice.jpg',
        rate: 'SSR'
    },{
        name: 'Fai',
        picture_path: 'Fai.png',
        rate: 'C'
    },{
        name: 'Ink',
        picture_path: 'Ink.png',
        rate: 'R'
    },{
        name: 'Pha',
        picture_path: 'Pha.jpg',
        rate: 'C'
    },{
        name: 'Sun',
        picture_path: 'Sun.jpg',
        rate: 'R'
    },{
        name: 'Idin',
        picture_path: 'Idin.png',
        rate: 'SSR'
    },{
        name: 'Pha',
        picture_path: 'Pha2.png',
        rate: 'C'
    },{
        name: 'Fai',
        picture_path: 'Fai2.png',
        rate: 'C'
    }
]