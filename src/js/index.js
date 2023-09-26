import '../styles/vendors.scss';
import '../styles/styles.scss';
import HtmlIcon from '../images/html.png';
import { Modal } from 'bootstrap'
// Em caso de não utilizar mais o Modal remover ele da collectSafelist no arquivo webpack.prod.config,
// ou se adicionar novos componentes, adicionalos também no arquivo acima

const htmlImg = document.querySelector('.title__html-image');
const img = document.createElement('img');
img.src = HtmlIcon;
img.alt = 'HTML'
htmlImg.appendChild(img);
