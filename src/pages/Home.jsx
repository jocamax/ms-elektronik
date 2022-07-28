import React from 'react'
import { MantineProvider, Text, Button, Stack, colorScheme } from "@mantine/core";
import { ContactIcons } from "../components/Contact";
import { HeroBullets } from '../components/Header';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <motion.div initial='hidden' animate='visible'
      variants={{
        hidden: {
          scale: .95,
          opacity: 0
        },
        visible: {
          scale:1,
          opacity:1,
          transition: {
            delay: .2
          }
        }
      }}
      >
    <HeroBullets/>
    <Stack align="center" mt={50}>
      <Text size={34}>Kontakt</Text>
    <ContactIcons/>
    </Stack>
      </motion.div>

    </>
  )
}

export default Home