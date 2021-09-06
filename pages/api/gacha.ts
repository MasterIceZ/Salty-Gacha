// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { elementDragControls } from 'framer-motion/types/gestures/drag/VisualElementDragControls'
import type { NextApiRequest, NextApiResponse } from 'next'

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
    var type:number = Math.floor(Math.random() * 20)
    console.log(type)
    if (type === 1) {
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'SSR') {
                got = Element[now];
                ok = true;
            }
        } while (!ok)
    }
    else if(type === 2 || type === 4 || type === 5 || type === 11){
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'R') {
                got = Element[now];
                ok = true;
            }
        } while (!ok)
    }
    else{
        var ok: boolean = false;
        do {
            var now = Math.floor(Math.random() * Element.length);
            if (Element[now].rate === 'C') {
                got = Element[now];
                ok = true;
            }
        } while (!ok)
    }
    res.status(200).json(got)
}