// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { elementDragControls } from 'framer-motion/types/gestures/drag/VisualElementDragControls'
import type { NextApiRequest, NextApiResponse } from 'next'
import { imageConfigDefault } from 'next/dist/server/image-config';

import { Element, ElementType } from '../../components/database'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ElementType>
) {
    var got: ElementType = {
        name: 'Null',
        picture_path: 'Null',
        rate: 'Null'
    };
    var type:number = Math.floor(Math.random() * 30)
    console.log(type)

    const url: string = 'https://github.com/MasterIceZ/Salty-Gacha/blob/main/public/picture/';
    const tail: string = '?raw=true'

    if (type === 1 || type === 25) {
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'SSR') {
                got = {
                    name: Element[now].name,
                    picture_path: url + Element[now].picture_path + tail,
                    rate: Element[now].rate
                };
                ok = true;
            }
        } while (!ok)
    }
    else if(type === 20){
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'UR') {
                got = {
                    name: Element[now].name,
                    picture_path: url + Element[now].picture_path + tail,
                    rate: Element[now].rate
                };
                ok = true;
            }
        } while (!ok)
    }
    else if(type === 2 || type === 4 || type === 5 || type === 11){
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'R') {
                got = {
                    name: Element[now].name,
                    picture_path: url + Element[now].picture_path + tail,
                    rate: Element[now].rate
                };
                ok = true;
            }
        } while (!ok)
    }
    else{
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'C') {
                got = {
                    name: Element[now].name,
                    picture_path: url + Element[now].picture_path + tail,
                    rate: Element[now].rate
                };
                ok = true;
            }
        } while (!ok)
    }
    res.status(200).json(got)
}