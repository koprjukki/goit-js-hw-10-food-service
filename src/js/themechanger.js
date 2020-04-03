import refs from './refs';

const THEME = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');

if (currentTheme === THEME.DARK) {
    refs.theme.checked = true;
    refs.body.classList.add(THEME.DARK)
}

if (currentTheme === THEME.LIGHT) {
    refs.theme.checked = false;
    refs.body.classList.add(THEME.LIGHT);
}

const handleChangeInput = e => {
    if (e.target.checked) {
        refs.body.classList.remove(THEME.LIGHT);
        refs.body.classList.add(THEME.DARK);

        localStorage.setItem('theme', THEME.DARK);
    }

    if (!e.target.checked) {
        refs.body.classList.remove(THEME.DARK);
        refs.body.classList.add(THEME.LIGHT);

        localStorage.setItem('theme', THEME.LIGHT);
    }
};

refs.theme.addEventListener('change', handleChangeInput);