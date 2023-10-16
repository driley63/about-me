import { Stack, Accordion, ListGroup } from 'react-bootstrap';
import { format, differenceInCalendarYears} from 'date-fns';
import { experiences } from '../data/experience/experience';
import { skills } from '../data/experience/skills';
import { categories } from '../data/experience/categories';
import { parents } from '../data/experience/parents';

export default function Experience() {
	let technologies = [];
  
	const rows = [];
	for(let i = 0; i < experiences.length; i++) {
		addExperienceTechnologies(experiences[i], technologies);
		rows.push(experienceRow(experiences[i]));
	}

	function addExperienceTechnologies(experience, technologies) {
		const experienceYears = differenceInCalendarYears(experience.end_date, experience.start_date);
    
		for(let i = 0; i < experience.usedTechnologies.length; i++) {
			let objectToPopulate = {};
			const category_key = skills[experience.usedTechnologies[i].skill_key].category;
        
			// Process Category
			let category = technologies.find(s => s.key === category_key);
			if(!category && category_key){
				category = {
					name: categories[category_key].name,
					key: category_key,
					duration: experienceYears,
					skills: []
				};
				technologies.push(category);
			} else if (category_key){
				category.duration += experienceYears;
			}
			objectToPopulate = category;

			const parent_key = skills[experience.usedTechnologies[i].skill_key].parent;
			let parent = objectToPopulate.skills.find(p => p.key === parent_key);
			if(!parent && parent_key) {
				parent = {
					name: parents[parent_key].name,
					key: parent_key,
					duration:experienceYears,
					skills:[]
				};
				objectToPopulate.skills.push(parent);
				objectToPopulate = parent;
			}
        
			const skill_key = experience.usedTechnologies[i].skill_key;
			const skill = objectToPopulate.skills.find(s => s.skill_key === skill_key);
			if(!skill) { 
				objectToPopulate.skills.push(
					{
						duration: experienceYears,
						key: skill_key,
						name: skills[skill_key].name,
						skills:[]
					}
				);
			} else {
				skill.duration += experienceYears;
			}
		}
	}

	function technologiesSideBar(tech) {

		const items = [];

		tech.forEach(cat => {
			const parents = [];
			cat.skills.forEach(par => {
				const skills = [];
				par.skills.forEach(skill => {
					skills.push(
						<ListGroup>
							<ListGroup.Item><Stack direction='horizontal'></Stack><div>{skill.name}</div><div>{skill.duration} years</div></ListGroup.Item>
						</ListGroup>
					);
				});
				parents.push(
					<Accordion>
						<Accordion.Item eventKey={par.key}>
							<Accordion.Header>{par.name}: {par.duration} years</Accordion.Header>
							<Accordion.Body>
								{skills}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				);
			});
			items.push(
				<Accordion.Item eventKey={cat.key}>
					<Accordion.Header>{cat.name}: {cat.duration} years</Accordion.Header>
					<Accordion.Body>
						{parents}
					</Accordion.Body>
				</Accordion.Item>);
		});

		return (
			<Accordion>
				{items}
			</Accordion>
		);
	}

	return (
		<Stack direction="horizontal">
			<Accordion defaultActiveKey={1} flush>
				<Accordion.Item eventKey={0}>
					<Accordion.Header>Technology Overview</Accordion.Header>
					<Accordion.Body>

					</Accordion.Body>
				</Accordion.Item>
				{rows}  
			</Accordion>
			<Stack>
				{technologiesSideBar(technologies)}
			</Stack>
		</Stack>
    
	);
}

function experienceRow(experience){
	return (
		<Accordion.Item eventKey={experience.id}>
			{experienceHeader(experience)}
			{experienceBody(experience)}
		</Accordion.Item>
	);
}

function experienceHeader(experience){
	return (
		<Accordion.Header className="experience-header">
			<Stack className="experience-header">
				<Stack direction="horizontal" gap={3}>
					<div className="company-name">{experience.company_name}</div>
					<div className="company-position mx-auto">{experience.position}</div>
					<div className="company-years">{format(experience.start_date, 'M/yy')} - {format(experience.end_date, 'M/yy')}</div>
				</Stack>
				<hr />
				{experience.technologies}
				<hr />
				{experience.summary}
			</Stack>
		</Accordion.Header>
	);
}

function experienceBody(experience){
	return (
		<Accordion.Body>
			{experience.summary}
		</Accordion.Body>
	);
}