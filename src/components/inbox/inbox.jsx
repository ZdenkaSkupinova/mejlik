import "./inbox.css"

export const Inbox = (props) => {
    const { account, messages} = props;

   const isUnread = (messages >= 1) ? true : false ;

  return (
      <>
        <div className="account">{account}</div>

        <div className="messagesAmount">
            {isUnread ? (
            <div className="unread" >Nepřečtených zpráv: {messages}</div>
            ) : ( 
            <div className="no-unread">Žádné nepřečtené zprávy</div> 
            )} 
        </div>
       
      </>
  )
}

/*
messages > 0 = className="unread"
messages === 0 = className="no-unread" zůstane nula a nevypíše se "Žádné nepřečtené zprávy"

A potom na riadku 13 chceš podmienečne zobrazovať podľa toho, či je isUnread true alebo false. 
Lenže isUnread je string, čo sa vyhodnotí ako true, a tak vždy zobrazíš Nepřečtených zpráv: {messages}, bez ohľadu na to, koľko tých správ je.
isUnread musíš upraviť tak, aby to bolo true alebo false. Volá sa to isUnread, takže by to malo vrátiť true, ak je správ 1 alebo viac.

komponenta Inbox
<Inbox account="radovan.holatko@mejlik.cz" messages={5} />

<div className="unread">Nepřečtených zpráv: 5</div>
<div className="no-unread">Žádné nepřečtené zprávy</div>

*/

