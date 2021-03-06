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
    },{
        name: 'Mark',
        picture_path: 'Mark.png',
        rate: 'R'
    },{
        name: 'Japan',
        picture_path: 'Japan.png',
        rate: 'C'
    },{
        name: 'Princess',
        picture_path: 'princess.png',
        rate: 'C'
    },{
        name: 'Nithi',
        picture_path: 'Nithi.png',
        rate: 'R'
    },{
        name: 'Gun',
        picture_path: 'Gun.png',
        rate: 'C'
    },{
        name: 'Idin',
        picture_path: 'Idin2.png',
        rate: 'C'
    },{
        name: 'Ink',
        picture_path: 'Ink.jpg',
        rate: 'C'
    },{
        name: 'Mark',
        picture_path: 'Mark.jpg',
        rate: 'R'
    },{
        name: 'Ink',
        picture_path: 'Ink2.jpg',
        rate: 'SSR'
    },{
        name: 'Krachu',
        picture_path: 'Krachu.JPG',
        rate: 'R'
    },{
        name: 'Pha and Japan',
        picture_path: 'PhaJapan.jpg',
        rate: 'R'
    },{
        name: 'Ice and Reo',
        picture_path: 'IceReo.jpg',
        rate: 'R'
    },{
        name: 'Idin',
        picture_path: 'Idin3.jpg',
        rate: 'C'
    },{
        name: 'Japan',
        picture_path: 'Japan2.jpg',
        rate: 'SSR'
    },{
        name: 'Gun',
        picture_path: 'Gun2.jpg',
        rate: 'R'
    },{
        name: 'Q',
        picture_path: 'Q.jpg',
        rate: 'C'
    },{
        name: 'Ink',
        picture_path: 'Ink3.jpg',
        rate: 'R'
    },{
        name: 'Mark',
        picture_path: 'Mark2.jpg',
        rate: 'R'
    },{
        name: 'Ink',
        picture_path: 'Ink4.jpg',
        rate: 'C'
    },{
        name: 'Pha',
        picture_path: 'Pha3.png',
        rate: 'R'
    },{
        name: 'Aong',
        picture_path: 'Aong.jpg',
        rate: 'UR'
    },{
        name: 'Mick',
        picture_path: 'Mick.png',
        rate: 'UR'
    },{
        name: 'Mick',
        picture_path: 'Mick2.jpg',
        rate: 'R'
    },{
        name: 'Karn',
        picture_path: 'Karn.png',
        rate: 'R'
    },{
        name: 'Nine',
        picture_path: 'Nine.jpg',
        rate: 'R'
    },{
        name: 'Karn',
        picture_path: 'Karn2.jpg',
        rate: 'R'
    },{
        name: 'Mick and Copy',
        picture_path: 'MickCopy.jpg',
        rate: 'R'
    },{
        name: 'Karn',
        picture_path: 'Karn3.png',
        rate: 'C'
    },{
        name: 'Karn',
        picture_path: 'Karn4.png',
        rate: 'R'
    },{
        name: 'Pha',
        picture_path: 'Pha4.png',
        rate: 'UR'
    },{
        name: 'Mick',
        picture_path: 'Mick3.jpg',
        rate: 'SSR'
    },{
        name: 'Kluy',
        picture_path: 'Kluy.png',
        rate: 'R'
    },{
        name: 'Petch',
        picture_path: 'Petch.png',
        rate: 'R'
    },{
        name: 'Pha',
        picture_path: 'Pha5.jpg',
        rate: 'UR'
    },{
        name: 'Ice',
        picture_path: 'Ice.jpg',
        rate: 'C'
    },{
        name: 'Mark3',
        picture_path: 'Mark3.JPG',
        rate: 'C'
    },{
        name: 'Fai',
        picture_path: 'Fai3.jpg',
        rate: 'R'
    },{
        name: 'Krachu',
        picture_path: 'Krachu2.jpg',
        rate: 'C'
    },{
        name: 'Gun',
        picture_path: 'Gun3.jpg',
        rate: 'C'
    },{
        name: 'Reo',
        picture_path: 'Reo.jpg',
        rate: 'C'
    },{
        name: 'Ice',
        picture_path: 'Ice3.jpg',
        rate: 'R'
    },{
        name: 'Sun and Gun',
        picture_path: 'SunGun.jpg',
        rate: 'R'
    },{
        name: 'Ice',
        picture_path: 'Ice4.jpg',
        rate: 'UR'
    },{
        name: 'Japan',
        picture_path: 'Japan3.jpg',
        rate: 'C'
    },{
        name: 'Idin',
        picture_path: 'Idin4.jpg',
        rate: 'C'
    },{
        name: 'Japan and Copy',
        picture_path: 'JapanCopy.jpg',
        rate: 'R'
    },{
        name: 'Pha and Tonkla',
        picture_path: 'PhaTonkla.jpg',
        rate: 'SSR'
    },{
        name: 'Ice and Ink',
        picture_path: 'IceInk.jpg',
        rate: 'R'
    },{
        name: 'Pha and Japan',
        picture_path: 'PhaJapan.jpg',
        rate: 'R'
    },{
        name: 'Gun',
        picture_path: 'Gun4.jpg',
        rate: 'C'
    },{
        name: 'Mark',
        picture_path: 'Mark4.jpg',
        rate: 'C'
    },{
        name: 'Sun',
        picture_path: 'Sun2.jpg',
        rate: 'C'
    },{
        name: 'Nithi and Reo',
        picture_path: 'NithiReo.jpg',
        rate: 'SSR'
    },{
        name: 'Sun',
        picture_path: 'Sun3.jpg',
        rate: 'UR'
    }
]