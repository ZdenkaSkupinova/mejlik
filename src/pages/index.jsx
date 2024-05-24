import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header/header';
import { Inbox } from '../components/inbox/inbox';


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <>
    <Header user="Radovan Holátko" />
    <Inbox account="radovan.holatko@mejlik.cz" messages={0} />
    </>
  </div>
);
