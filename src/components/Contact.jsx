import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons';


const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: 'black',
  },

  description: {
    color: 'black',
  },
}));


function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text  size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'info@mselektronik-beograd.com', icon: IconAt },
  { title: 'Telefon', description: '(+381) 065/6633 228', icon: IconPhone },
  { title: 'Adresa', description: '11000 BEOGRAD, MAJORA BRANKA VUKOSAVLJEVIĆA 2', icon: IconMapPin },
  { title: 'TEL/FAX', description: '(+381) 011/2270 793', icon: IconPhone },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack >{items}</Stack>;
}

export function ContactIcons() {
  return (
      <Box
        m={7}
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, yellow 0%, 
            #ffbb00 100%)`,
        })}
      >
        <ContactIconsList  variant="white" />
      </Box>
  );
}