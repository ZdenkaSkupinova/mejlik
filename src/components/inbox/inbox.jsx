import "./inbox.css"

export const Inbox = (props) => {
    const { account, messages } = props;

    const isUnread = messages >= 1 ? "unread" : "no-unread";

  return (
      <>
        <div className="account">{account}</div>

        <div className="messagesAmount">
            {isUnread ? (
            <div className="unread">Nepřečtených zpráv: {messages}</div>
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

komponenta Inbox
<Inbox account="radovan.holatko@mejlik.cz" messages={5} />

<div className="unread">Nepřečtených zpráv: 5</div>
<div className="no-unread">Žádné nepřečtené zprávy</div>


*/
