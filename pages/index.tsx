import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text } from '@chakra-ui/react'

const Home:NextPage = () => {
  return (
    <>
      <Text align="center" fontSize="50px">Visit me via API</Text>
      <a href="./api/gacha">
        <Text align="center" fontSize="45px">Here!</Text>
      </a>
    </>
  )
}

export default Home
