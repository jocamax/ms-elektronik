import React from 'react'
import { Text, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const Proizvodi = () => {
  return (
    <div className='wrap'>
    <div className='proizvodi-container'>
        <div className='proizvodi-img'>
            <img className='proizvod-img' src="http://www.mselektronik-beograd.com/pic_proizvod1.jpg" alt="" />
        </div>
        <div className='proizvodi-content'>
            <h2>Kablovska kolica</h2>
            <Text>Proizvodimo sve tipove kablovskih kolica za pljosnate i okrugle kablove, sa fiksnim i rotirajućim sedlom, nosivosti  od 600N-2000N, za montiranje na  I (INP) profile.</Text>
            <Text>Kolica su kompletno izrađena od metala sa gumenim odbojnicima, predviđena za teške uslove rada.</Text>
            <Text>Izrađujemo ih u standardnim dimenzijama, na osnovu uzorka i po posebnim zahtevima koupca.</Text>
            <Text> Za određivanje tipa kolica potrebno je znati spoljne gabarite kablova koji se pakuju na kolica (ili oznaku kabla) i veličinu INP profila na koji se kolica montiraju.</Text>
            <a target='_blank' to='http://www.mselektronik-beograd.com/ms%20elektronik-kablovska%20kolica_web.pdf'>
            <Button mt={10} color={'yellow'} className='btn'>Preuzimanje: Katalog STANDARDNIH kablovskih kolica</Button>
            </a>
        </div>
    </div>
    <div className='proizvodi-container'>
        <div className='proizvodi-img'>
            <img className='proizvod-img' src="http://www.mselektronik-beograd.com/pic_proizvod2.jpg" alt="" />
        </div>
        <div className='proizvodi-content'>
            <h2>Gibljivi oduzimači struje</h2>
            <Text>Gibljivi oduzimači struje izrađuju se u potpornoj, visećoj i bočnoj konstrukciji, za strujna opterećenja od 100-1200A i napon do 1000V.</Text>
            <Text>Konstrukcija naših oduzimača je bitno unapređena i obezbeđuje stabilan rad oduzimača u teškim uslovima rada uz mogućnost regulacije sile pritiska kontaktnog elementa.</Text>
            <Text>Kontaktni element oduzimača je najčešće ugljeno-grafitni, a za veća opterećenja 800-1200A metalo-grafitni i čelični.</Text>
            <Text> Za određivanje tipa oduzimača potrebno je definisati maximalnu struju opterećenja/veličinu kontaktnog elementa, radnu visinu oduzimača i montažni razmak.</Text>
            <a target='_blank' to='http://www.mselektronik-beograd.com/ms%20elektronik-kablovska%20kolica_web.pdf'>
            <Button mt={10} color={'yellow'} className='btn'>Preuzimanje: Katalog GIBLJIVIH ODUZIMAČA STRUJE</Button>
            </a>
        </div>
    </div>
    <div className='proizvodi-container'>
        <div className='proizvodi-img'>
            <img className='proizvod-img' src="http://www.mselektronik-beograd.com/pic_proizvod3.jpg" alt="" />
        </div>
        <div className='proizvodi-content'>
            <h2>Obrtni oduzimači struje</h2>
            <Text>Proizvodimo obrtne oduzimače struje u standardnoj izvedbi ili po zahtevu kupca.</Text>
            <Text>Oduzimači su u standardnoj izvedbi predviđeni za maximalno strujno opterećenje do 50A i maximalni napon do 600V.</Text>
            <Text>Kontaktni prstenovi su izrađeni od bronze, a četkice su metalografitne (izmenljive). Izolacioni prstenovi izrađuju se od polietilena i tekstolita.</Text>
            <Text> U mogućnosti smo da ispoštujemo posebne zahteve kupca.</Text>
            <a target='_blank' to='http://www.mselektronik-beograd.com/ms%20elektronik-kablovska%20kolica_web.pdf'>
            <Button mt={10} color={'yellow'} className='btn'>Preuzimanje: Katalog OBRTNIH ODUZIMAČA STRUJE</Button>
            </a>
        </div>
    </div>
    </div>
  )
}

export default Proizvodi