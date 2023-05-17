import styles from './Header.module.css';
//componentes começam coom letra maiúscula (Header) e elementos html com letras minúscilas (<header>)

//import igniteLogo from '../assets/ignite-logo.svg';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header(){
  return (
    //styles.header (header é a classe do css)
    <header className={styles.header}>
    <img src={igniteLogo} alt="logoignite"/>
    </header>

  );
}
