
import './App.css';
import Description from './components/Description';
import "bootstrap/dist/css/bootstrap.min.css";
import Name from './components/Name';
import Price from './components/Price';
import { product } from './product';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
function App() {
 let namev2="amine ben jebara"
 
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div class="image">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.url} />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
            <Card.Text>
              <Price />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      {namev2 ? (
        <div>
          <h1>hello {namev2}</h1>
          <img src="https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960" />
        </div>
      ) : (
        <h1>hello there</h1>
      )}
    </div>
  );
}

export default App;
