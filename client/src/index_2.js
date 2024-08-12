import react from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const img_1 = "https://picsum.photos/id/237/400/300";
const img_2 = "https://picsum.photos/seed/picsum/400/300";

ReactDOM.render(
  <>
<h1>Hello World</h1>
<p style={{backgroundColor:"red"}}>Paragraph</p>
<h3 className='heading'>Heading 3</h3>
<h4>Heaaing 4</h4>
<img src={img_1} alt='image'/><br></br>
<img src={img_2} alt='image2'/>
  </>,
document.getElementById('root')
)