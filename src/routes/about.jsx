import { Card, Stack } from 'react-bootstrap';

export default function About() {
	return (
		<Stack>
			<h2>A little about me...</h2>
			<section className="container p-0 m-0">
				<div className="row">
					<div className="col-lg-12 pt-lg-0">
						<Card className="float-end">
							<Card.Title className="p-2 m-0">Links</Card.Title>
							<Card.Body>
								<ul className="p-2 m-0">
									<li><a href="https://www.linkedin.com/in/dustinlriley" target="blank">Resume</a></li>
									<li><a href="https://www.linkedin.com/in/dustinlriley" target="blank">LinkedIn</a></li>
									<li><a href="https://www.linkedin.com/in/dustinlriley" target="blank">Github</a></li>
								</ul>
							</Card.Body>
						</Card>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a elit ac mi suscipit pharetra. Proin suscipit malesuada leo, eu rutrum enim convallis eu. Vestibulum non dictum magna, at ornare orci. Nam sed posuere libero, vitae rhoncus libero. Donec imperdiet sollicitudin diam, in pretium mauris pulvinar ac. Mauris porta pretium posuere. Curabitur dictum consectetur dui, et dictum felis porttitor sit amet. Aenean vestibulum, diam ac semper pharetra, tellus nisl convallis lorem, vitae auctor leo augue eget odio. Duis non quam a felis ullamcorper iaculis vitae vel enim. Pellentesque elementum a eros nec ullamcorper. Nunc lectus velit, iaculis ac diam nec, ultrices volutpat dolor. Nam vestibulum suscipit viverra. Ut risus ipsum, aliquam sed tristique eu, ullamcorper at elit. Nunc et posuere dui. Fusce pulvinar venenatis maximus. Ut lacinia ante vitae quam rhoncus lacinia.</p>
					</div>
				</div>
			</section>
		</Stack>        
	);
}
