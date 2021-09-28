import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '1400px',
    lg: '1400px',
    xl: '2100px',
});

const Heading = {
    baseStyle: {
        fontWeight: '600',
        color: 'darkGrayBlue',
        my: '1rem',
    },
};

const Container = {
    baseStyle: {
        px: '1.5rem',
    },
};

const Text = {
    baseStyle: {
        my: '1rem',
    },
};
const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                boxSizing: 'border-box',
                fontSize: '18px',
                fontWeight: '400',
                color: 'grayBlue',
            },
        },
    },
    colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayBlue: 'hsl(210, 10%, 33%)',
        grayBlue: 'hsl(201, 11%, 66%)',
    },
    fonts: {
        heading: 'Bai Jamjuree',
        body: 'Bai Jamjuree',
    },
    components: {
        Container,
        Heading,
    },
});

export default theme;
