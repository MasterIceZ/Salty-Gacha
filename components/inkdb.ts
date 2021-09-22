import { isContentEditable } from "@chakra-ui/utils";

export interface ElementType {
    name: string,
    picture_path: string,
    rate: string
}

export const Element:ElementType[] = [
    {
        name: 'Ink',
        picture_path: 'Ink.jpg',
        rate: 'HBD'
    },{
        name: 'Ink',
        picture_path: 'Ink.png',
        rate: 'HBD'
    },{
        name: 'Ink',
        picture_path: 'Ink2.jpg',
        rate: 'HBD'
    },{
        name: 'Ink',
        picture_path: 'Ink3.jpg',
        rate: 'HBD'
    },{
        name: 'Ink',
        picture_path: 'Ink4.jpg',
        rate: 'HBD'
    }
]