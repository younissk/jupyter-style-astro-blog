export interface Theme {
    text: {
        font: string;
        color: string;
    }
    colors: {
        primary: string;
        secondary: string;
        text: string;
        siteBackground: string;
        contentBackground: string;
    }
}

export const darkTheme: Theme = {
    text: {
        font: 'monospace',
        color: '#ffffff',
    },
    colors: {
        primary: '#212121',
        secondary: '#121212',
        siteBackground: '#161717',
        contentBackground: '#212121',
        text: '#ffffff',
    }
}

export const lightTheme: Theme = {
    text: {
        font: 'monospace',
        color: '#000000',
    },
    colors: {
        primary: '#ffffff',
        secondary: '#f0f0f0',
        siteBackground: '#ffffff',
        contentBackground: '#f0f0f0',
        text: '#000000',
    }
}
