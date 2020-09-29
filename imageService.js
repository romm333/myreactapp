// fake image service

function GetImage(char) {
  switch (char) {
    case 'a':
    case 'b':
    case 'c':
    case 'd':
    case 'e':
      return `../../img/${char}.png`;
    default:
      return '../../img/a.png';
  }
}

export default GetImage;
