// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { elementDragControls } from 'framer-motion/types/gestures/drag/VisualElementDragControls';
import type { NextApiRequest, NextApiResponse } from 'next'

import { Element, ElementType } from '../../components/inkdb'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ElementType>
) {
    res.status(200).json(Element[Math.floor(Math.random() * Element.length)])
}
