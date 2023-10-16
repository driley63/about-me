import { Skill_Keys } from '../experience/lookups';

export const experiences = [
	{
		id:1,
		company_name: 'Rimsys',
		position: 'Senior Release Manager',
		start_date: new Date(2021, 8, 5),
		end_date: new Date(2023, 0, 13),
		summary:'Managed the Quality Assurance, DevOps, and Data Migration teams with over 30 direct reports, both onshore and offshore, while also creating a full release pipeline from feature ideation to final release in a single-tenet Software as a Service (SaaS) ecosystem consisting of over 40 unique environments.',
		usedTechnologies: [
			{ skill_key: Skill_Keys.DevOps.Lambda, duration: null },
			{ skill_key: Skill_Keys.DevOps.AWS_RDS, duration: null },
			{ skill_key: Skill_Keys.DevOps.AWS_EC2, duration: null },
			{ skill_key: Skill_Keys.DevOps.AWS_ECS, duration: null },
			{ skill_key: Skill_Keys.DevOps.AWS_S3, duration: null },
			{ skill_key: Skill_Keys.DevOps.AWS_Route_53, duration: null },
			{ skill_key: Skill_Keys.DevOps.Kubernetes, duration: null },
			{ skill_key: Skill_Keys.DevOps.MS_AZURE, duration: null },
			{ skill_key: Skill_Keys.DevOps.Docker, duration: null },
			{ skill_key: Skill_Keys.DevOps.Argo_CD, duration: null },
			{ skill_key: Skill_Keys.DevOps.Vapor, duration: null },
			{ skill_key: Skill_Keys.DevOps.Fume, duration: null },
			{ skill_key: Skill_Keys.Database.MySQL, duration: null },
			{ skill_key: Skill_Keys.Database.PostgreSQL, duration: null },
			{ skill_key: Skill_Keys.QA.qTest, duration: null },
			{ skill_key: Skill_Keys.QA.Robot_Framework, duration: null },
			{ skill_key: Skill_Keys.QA.TestRail, duration: null },
			{ skill_key: Skill_Keys.QA.qTest, duration: null },
			{ skill_key: Skill_Keys.Documentation.Confluence, duration: null },
			{ skill_key: Skill_Keys.Documentation.Coda, duration: null },
			{ skill_key: Skill_Keys.Documentation.Redocly, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.JIRA, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.Zenhub, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.LinearB, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.Honeycomb, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.Drata, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.Agile, duration: null },
			{ skill_key: Skill_Keys.Process_Tools.Kanban, duration: null },
			{ skill_key: Skill_Keys.Development.PHP, duration: null },
			{ skill_key: Skill_Keys.Development.JavaScript, duration: null },
			{ skill_key: Skill_Keys.Development.CSS, duration: null },
			{ skill_key: Skill_Keys.Development.Nuxt, duration: null },
			{ skill_key: Skill_Keys.Development.Vue, duration: null },
			{ skill_key: Skill_Keys.Development.TypeScript, duration: null },
			{ skill_key: Skill_Keys.Development.Laravel, duration: null },
			{ skill_key: Skill_Keys.Development.Tailwind, duration: null },
			{ skill_key: Skill_Keys.Development.Git, duration: null },
			{ skill_key: Skill_Keys.Development.Yarn, duration: null },
            
		],
		accomplishments: []
	},
	// {
	//     id:2,
	//     company_name: 'NOCTEM',
	//     position: 'Chief Technology Officer',
	//     start_date: new Date(2020, 2, 5),
	//     end_date: new Date(2021, 7, 13),
	//     summary:'Transformed company from a small, non-technical, team relying entirely on outsourcing to a fully self-sustaining technology company with mature processes and tools.',
	//     technologies: [
	//         { category: 'DevOps', technologies: ['AWS GovCloud', 'AWS ElasticBeanstalk','AWS RDS', 'AWS EC2', 'AWS ElasticSearch', 'Docker'] },
	//         { category: 'Database', technologies: ['MongoDB'] },
	//         { category: 'QA', technologies: ['TestRail'] },
	//         { category: 'Documentation', technologies: ['Confluence'] },
	//         { category: 'Process/Tools', technologies: ['JIRA', 'Google Analytics'] },
	//         { category: 'Development', technologies: ['Ionic', 'Javascript', 'Node.js','TypeScript', 'Angular', 'SCSS', 'Git', 'ExpressJS']}
	//     ],
	//     accomplishments: []
	// },
	// {
	//     id:3,
	//     company_name: 'Mayvue Solutions/Bentley Systems',
	//     position: 'Senior Software Engineer',
	//     start_date: new Date(2014, 15, 5),
	//     end_date: new Date(2019, 11, 13),
	//     summary:'Contributed to and/or led many aspects of the AASHTOWare BrM application, including architectural design, user interface design, performance optimization, database tuning, and more.  ',
	//     technologies: [
	//         { category: 'DevOps', technologies: ['Azure'] },
	//         { category: 'Database', technologies: ['SQL Server', 'Oracle'] },
	//         { category: 'Documentation', technologies: ['Confluence'] },
	//         { category: 'Process/Tools', technologies: ['JIRA', 'Mouseflow'] },
	//         { category: 'Development', technologies: ['C#', 'Javascript', 'Node.js','TypeScript', 'Vue.js', 'SCSS', 'Git', '.NET', 'Bootstrap', 'Xamarin']}
	//     ],
	//     accomplishments: []
	// },
	// {
	//     id:4,
	//     company_name: 'ZOLL LifeVest',
	//     position: 'Senior Software Engineer',
	//     start_date: new Date(2014, 15, 5),
	//     end_date: new Date(2013, 1, 13),
	//     summary:'Contributed to and/or led many aspects of the AASHTOWare BrM application, including architectural design, user interface design, performance optimization, database tuning, and more.  ',
	//     technologies: [
	//         { category: 'Database', technologies: ['SQL Server'] },
	//         { category: 'Development', technologies: ['C#', 'Javascript', 'CSS', '.NET']}
	//     ],
	//     accomplishments: []
	// },
	// {
	//     id:4,
	//     company_name: 'Net Health',
	//     position: 'Software Engineer',
	//     start_date: new Date(2009, 15, 5),
	//     end_date: new Date(2013, 1, 13),
	//     summary:'Contributed to and/or led many aspects of the AASHTOWare BrM application, including architectural design, user interface design, performance optimization, database tuning, and more.  ',
	//     technologies: [
	//         { category: 'Database', technologies: ['SQL Server'] },
	//         { category: 'Development', technologies: ['C#', 'Javascript', 'CSS', '.NET', 'SSRS']}
	//     ],
	//     accomplishments: []
	// }
];