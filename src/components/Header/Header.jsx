import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt="logo" src="https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl_400x400.jpg"/>
        </header>
    );
}

export default Header;