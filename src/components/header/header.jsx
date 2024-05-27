import"./header.css"

export const Header = ({user}) => {

  const isLoggedIn = user ? true : false ;

  return (
    <>
   <header>
      <div className="topbar container">

        <div className="topbar__brand">
          <div className="logo"></div>
          <div className="company">Mejlík.cz</div>
        </div>
      
        {isLoggedIn ? (
        <div className="user">
          <div className="user__name">Radovan Holátko</div>
          <div className="user__icon"></div>
        </div>
      ) : (
        <div className="login">Přihlásit se</div>)}

      </div>
    </header>
    </>
  )
}



/*
konstanta Header:
Chceme zařídit, že pokud je komponenta použita takto zobrazí se hlavičku s přihlášeným uživatelem.

<Header user="Radovan Holátko" />

Pokud je naopak použita takto, zobrazí se hlavička nabízející přihlášení. 
Pokud jsme do props při použití komponenty nevložili žádnou hodnotu, znamená to, že obsahuje hodnotu undefined.

<Header />



      {isLoggedIn ? (
        <div className="user">{user}
          <div className="user__name">Radovan Holátko</div>
          <div className="user__icon"></div>
        </div>
      ) : (
        <div className="login">Přihlásit se</div>)}

*/