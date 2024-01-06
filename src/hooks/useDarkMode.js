

export const useDarkMode = () => {
  
    const setDarkMode = () => {
        document.querySelector('.yellowbar')?.setAttribute('data-theme', 'dark')
        document.querySelector('.outlet')?.setAttribute('data-theme', 'dark')
        document.querySelector('.pokepage__ppselect')?.setAttribute('data-theme', 'dark')
        document.querySelector('.div')?.setAttribute('data-theme', 'dark')
        document.querySelector('.input__search')?.setAttribute('data-theme', 'dark')
        document.querySelector('.btn__search')?.setAttribute('data-theme', 'dark')
        document.querySelector('.select__type')?.setAttribute('data-theme', 'dark')
        document.querySelector('.glass')?.setAttribute('data-theme', 'dark')
        document.querySelector('.pokepage__trainer')?.setAttribute('data-theme', 'dark')
        document.querySelector('.page')?.setAttribute('data-theme', 'dark')
        document.querySelector('.bx').setAttribute('data-theme', 'dark')
        document.querySelector('.pokepage__welcome')?.setAttribute('data-theme', 'dark')
        document.querySelector('.pokepage__perpage')?.setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector('.yellowbar')?.setAttribute('data-theme', 'light')
        document.querySelector('.outlet')?.setAttribute('data-theme', 'light')
        document.querySelector('.pokepage__ppselect')?.setAttribute('data-theme', 'light')
        document.querySelector('.div')?.setAttribute('data-theme', 'light')
        document.querySelector('.input__search')?.setAttribute('data-theme', 'light')
        document.querySelector('.btn__search')?.setAttribute('data-theme', 'light')
        document.querySelector('.select__type')?.setAttribute('data-theme', 'light')
        document.querySelector('.glass')?.setAttribute('data-theme', 'light')
        document.querySelector('.pokepage__trainer')?.setAttribute('data-theme', 'light')
        document.querySelector('.page')?.setAttribute('data-theme', 'light')
        document.querySelector('.bx').setAttribute('data-theme', 'light')
        document.querySelector('.pokepage__welcome')?.setAttribute('data-theme', 'light')
        document.querySelector('.pokepage__perpage')?.setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    return{
        toggleTheme,
    }
}
