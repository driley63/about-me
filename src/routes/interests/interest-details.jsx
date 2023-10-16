import { Card, Carousel } from 'react-bootstrap';
import { interests } from '../../data/interests/interests';
import { useParams } from 'react-router-dom';

export default function InterestDetails() {
	const {id} = useParams();
	if (!(id)) return;
	const interest = interests.find(i => i.id === parseInt(id));
	if(!interest) return;
	const rows = [];
	const images = [];


	interest.images.forEach(image => {
		images.push(
			<Carousel.Item>
				<img
					key={image.id}
					className="d-block w-75 justify-center"
					src={image.url}
					alt={image.caption}
				/>
			</Carousel.Item>
		);
	});
	rows.push(
        
		<Card>
			<Card.Title>{interest.title}</Card.Title>
			<Card.Body>
				<Carousel>
					{images}
				</Carousel>
			</Card.Body>
			<Card.Footer>
				{interest.description}
			</Card.Footer>
		</Card>);
	return ( rows );
}
