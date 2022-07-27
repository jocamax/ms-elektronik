import React from 'react'
import { MantineProvider, Text, Button, Stack, colorScheme } from "@mantine/core";
import { ContactIcons } from "../components/Contact";
import { HeroBullets } from '../components/Header';

const Home = () => {
  return (
    <>
    <HeroBullets/>

    <Stack align="center" mt={50}>
    <ContactIcons/>
    </Stack>
    </>
  )
}

export default Home