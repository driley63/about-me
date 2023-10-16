import { Card } from 'react-bootstrap';
import { interests } from '../../data/interests/interests';
import '../../styles/pages/interests.scss';
import { useNavigate } from 'react-router-dom';

export default function Interests() {
    const navigate = useNavigate();
    const interestItems = [];
    interests.forEach(interest => {
        let imgUrl = null;
        if(interest.images.length > 0) {
            imgUrl = 'url(' + interest.images[0].url + ')';
        }
        const cardStyle = {
            backgroundImage: imgUrl,
        }
        interestItems.push(
                <Card key={interest.id} className="col-6 interest m-2" style={cardStyle} onClick={() => navigate('/interests/details/' + interest.id) }>
                    <Card.Title className="interest-title">{interest.title}</Card.Title>                        
                </Card>
            );
        });
    return (
        <div className="container">
            <div className="row">
                { interestItems }
            </div>
        </div>
    );
}


