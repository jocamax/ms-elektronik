import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
  } from '@mantine/core';
import { Link } from 'react-router-dom';

  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing.xl * 2.5,
      paddingBottom: theme.spacing.xl * 2.5,
    },
  
    content: {
      maxWidth: 480,
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 44,
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: '#5c5c41',
      borderRadius: theme.radius.sm,
      padding: '4px 12px',
    },
  }));
  
  export function HeroBullets() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}>O nama</span>
              </Title>
              <Text color="dimmed" mt="md" className='text-transform'>
              MS Elektronik je osnovan 1991. godine, a od 1994. počinje proizvodnju elektroopreme za kranove.
              </Text>
              <Text color="dimmed" mt="md" className='text-transform'>
               Specijalizovani smo za proizvodnju kablovskih kolica za pljosnate (flet) ili okrugle kablova, gibljivih oduzimača struje kao i obrtnih oduzimača struje.
              </Text>
              <Text color="dimmed" mt="md" className='text-transform'>
              U proizvodnom programu nudimo standardne tipove kablovskih kolica i oduzimača struje, ali smo spremni da ispoštujemo i specijalne zahteve kupca. reference: 
              </Text>
              <Text color="dimmed" mt="md" className='text-transform'>
              US Steel Serbia, Željezara Nikšić, Kombinat aluminijuma Podgorica, Valjaonica bakra Sevojno, RB Kolubara, Lola...
              </Text>
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    yes
                  </ThemeIcon>
                }
              >
               
              </List>
  
              <Group mt={30}>
              <Link to='/proizvodi'>
                <Button color={'yellow'} radius="md" size="md" className={classes.control}>
                  Proizvodi
                </Button>
                </Link>
              </Group>
            </div>
            <Image src='http://www.mselektronik-beograd.com/pic_onama1.jpg' radius={'lg'} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }