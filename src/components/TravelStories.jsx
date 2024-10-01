import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { SlArrowDown } from "react-icons/sl";
import Accordion from 'react-bootstrap/Accordion';
import Figure from 'react-bootstrap/Figure';

function Travelstories() {
  return (
    <>
    <h3 style={{color:'#0047AB', textAlign:'center'}}>----Stories-----</h3>
    <CardGroup>
       <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="C:\Users\Lenovo\OneDrive\Desktop\React_Projects\myapp\public\assests\image\home\kashmir2.jpeg"/>
        <Card.Body>
          <Card.Title>Kashmir</Card.Title>
          <Card.Text>
        


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Kashmir</Accordion.Header>
        <Accordion.Body>
        Kashmir is heaven on earth with its alpine peaks and snow-clad ranges. 
        From trekking to solo trips to leisurely family vacations, Kashmir is a complete package. 
        An unbelievably beautiful landscape, valley of flowers, serene lakes and amazing trekking trails,
         Kashmir has a little of everything to offer to its visitors. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Kashmir for your next trip?</Accordion.Header>
        <Accordion.Body>
         Here is a complete list of places you must visit during your tour:
        The capital of J&K, Srinagar is one of the most beautiful places in Kashmir.
         Take a shikara ride on the peaceful Dal Lake, view the city from the top of Shankaracharya Temple
          and stay in the iconic house boats on your next trip. You'll definitely fall in love with Kashmir!
           Srinagar is home to the Shalimar Gardens that are on the back of the Rs. 10 Indian Currency Note.
How to reach:To reach Srinagar by train, one could take a train to either Jammu Tavi or Udhampur Railway Station. 
From there you can take a taxi or a bus to this beautiful place.
Must Do: Stay in a Houseboat
Best time to visit:February to July

<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="C:\Users\Lenovo\OneDrive\Desktop\React_Projects\myapp\public\assests\image\home\srinagar.jpg"
      />
      <Figure.Caption>
        Shrinagar in Kashmir
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
 


          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="C:\Users\Lenovo\OneDrive\Desktop\React_Projects\myapp\public\assests\image\home\agra-taj-mahal.avif" />
        <Card.Body>
          <Card.Title>Taj Mahal</Card.Title>
          <Card.Text>
       
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Kashmir</Accordion.Header>
        <Accordion.Body>
        Kashmir is heaven on earth with its alpine peaks and snow-clad ranges. 
        From trekking to solo trips to leisurely family vacations, Kashmir is a complete package. 
        An unbelievably beautiful landscape, valley of flowers, serene lakes and amazing trekking trails,
         Kashmir has a little of everything to offer to its visitors. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Kashmir for your next trip?</Accordion.Header>
        <Accordion.Body>
         Here is a complete list of places you must visit during your tour:
        The capital of J&K, Srinagar is one of the most beautiful places in Kashmir.
         Take a shikara ride on the peaceful Dal Lake, view the city from the top of Shankaracharya Temple
          and stay in the iconic house boats on your next trip. You'll definitely fall in love with Kashmir!
           Srinagar is home to the Shalimar Gardens that are on the back of the Rs. 10 Indian Currency Note.
How to reach:To reach Srinagar by train, one could take a train to either Jammu Tavi or Udhampur Railway Station. 
From there you can take a taxi or a bus to this beautiful place.
Must Do: Stay in a Houseboat
Best time to visit:February to July

<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="/assets/srinagar.jpg"
      />
      <Figure.Caption>
        Shrinagar in Kashmir
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
          </Card.Text>
        </Card.Body>
       
      </Card>


      
      <Card>
        <Card.Img variant="top" style={{height:'300px'}} src="/assests/image/Hoi.jpg" />
        <Card.Body>
          <Card.Title>Hoi An-Vietnam</Card.Title>
          <Card.Text>
         
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Read More About Kashmir</Accordion.Header>
        <Accordion.Body>
        Kashmir is heaven on earth with its alpine peaks and snow-clad ranges. 
        From trekking to solo trips to leisurely family vacations, Kashmir is a complete package. 
        An unbelievably beautiful landscape, valley of flowers, serene lakes and amazing trekking trails,
         Kashmir has a little of everything to offer to its visitors. <br/>
         </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
        <Accordion.Header>Looking to decode Kashmir for your next trip?</Accordion.Header>
        <Accordion.Body>
         Here is a complete list of places you must visit during your tour:
        The capital of J&K, Srinagar is one of the most beautiful places in Kashmir.
         Take a shikara ride on the peaceful Dal Lake, view the city from the top of Shankaracharya Temple
          and stay in the iconic house boats on your next trip. You'll definitely fall in love with Kashmir!
           Srinagar is home to the Shalimar Gardens that are on the back of the Rs. 10 Indian Currency Note.
How to reach:To reach Srinagar by train, one could take a train to either Jammu Tavi or Udhampur Railway Station. 
From there you can take a taxi or a bus to this beautiful place.
Must Do: Stay in a Houseboat
Best time to visit:February to July

<Figure>
      <Figure.Image
        width={500}
        height={180}
        alt="500x180"
        src="/assets/srinagar.jpg"
      />
      <Figure.Caption>
        Shrinagar in Kashmir
      </Figure.Caption>
    </Figure>
    </Accordion.Body>
</Accordion.Item>
      </Accordion>
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
    </>
  );
}

export default Travelstories;