import { isContentEditable } from "@chakra-ui/utils";

export interface ElementType{
    name: string,
    picture_path: string,
    rate: string
}

export const Element:ElementType[] = [
    {
        name: 'Ice',
        picture_path: '../public/picture/Ice.jpg',
        rate: 'SSR'
    },
    {
        name: 'Hello',
        picture_path: 'None',
        rate: 'C'
    },
    {
        name: 'Test',
        picture_path: 'No',
        rate: 'R'
    }
]