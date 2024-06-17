function setTheme(themeName) {
    let themeLink = document.getElementById('theme-link');
    if (themeName === 'dark') {
        themeLink.href = 'dark-theme.css';
    } else {
        themeLink.href = 'light-theme.css';
    }
}
