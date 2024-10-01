import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';




function Offer() {
  return (
  <>
  

   <h3 style={{color:'#0047AB', textAlign:'center'}}>------Exclusive Offers-----</h3>
   
     

        <CardGroup>
      <Card  className="mb-2 ">
        
        <Card.Body>
          <Card.Title>Offer On New user</Card.Title>
          <Card.Text>
            New user Offer is your first flight then here you go, 
            use code to get this Offer
            
    
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Use Code:34fe44</small>
        </Card.Footer>
      </Card>
      <Card className="mb-2">
        
        <Card.Body>
          <Card.Title>Invite & Earn</Card.Title>
          <Card.Text>
            Invite & Earn up to 500 &#8377{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Use Code:2dfe44</small>
        </Card.Footer>
      </Card>
      <Card className="mb-2">
      
        <Card.Body>
          <Card.Title>Offer on Last minute Booking</Card.Title>
          <Card.Text>
            Flat 25% off with last minute Booking
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Use Code:22fe94</small>
        </Card.Footer>
      </Card>

      <Card className="mb-2">
        
        <Card.Body>
          <Card.Title>Flat 20% Off</Card.Title>
          <Card.Text>
            Flat 20% OFF on Select 6E Add-Ons
    
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Use Code:22fe84</small>
        </Card.Footer>
      </Card>
    </CardGroup>
   
   
     
      </>
  );
}

export default Offer;