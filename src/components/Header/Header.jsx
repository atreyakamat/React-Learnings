import reactImg from '../../assets/react-core-concepts.png';
import reactImg1 from '../../assets/config.png';
import reactImg2 from '../../assets/jsx-ui.png';
import './Header.css';
const reactDescription = ['Fundamental', 'Crucial', 'Core'];
const reactImgArray = [reactImg1, reactImg2, reactImg];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
    const description = reactDescription[genRandomInt(2)]
    const img = reactImgArray[genRandomInt(2)];
  return (
    <header>
      <img src= {img}  alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;