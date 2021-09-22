import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text } from '@chakra-ui/react'

import { Element, ElementType } from '../components/inkdb'

const Ink: NextPage = () => {
    var rnd = Math.floor(Math.random() * Element.length)
    console.log(Element[rnd].picture_path)
    var pic = Element[rnd].picture_path
    
    const url: string = 'https://github.com/MasterIceZ/Salty-Gacha/blob/main/public/picture/';
    const tail: string = '?raw=true'

    const now = url + pic + tail;
    console.log(now);

    return (
        <>
            <img src={ now } text-align="center"/>
            <Text> Hello </Text>
        </>
    )
}

export default Ink
