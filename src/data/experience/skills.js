import { Category_Keys, Parent_Keys } from './lookups'

export const skills = {
	/* DevOps */
	'lambda': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Lambda' },
	'rds': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Relational Database Service (RDS)'},
	'ec2': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Elastic Compute Cloud (EC2)'},
	'ecs': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Elastic Container Service (ECS)'},
	's3': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Simple Storage Service (S3)'},
	'route53': { category: Category_Keys.DevOps, parent: Parent_Keys.AWS, name: 'Route 53'},
	'kubernetes': { category: Category_Keys.DevOps, parent: null, name: 'Kubernetes' },
	'azure': { category: Category_Keys.DevOps, parent: null, name: 'Azure' },
	'docker': { category: Category_Keys.DevOps, parent: null, name: 'Docker' },
	'argo': { category: Category_Keys.DevOps, parent: null, name: 'Argo CD' },
	'vapor': { category: Category_Keys.DevOps, parent: null, name: 'Vapor' },
	'fume': { category: Category_Keys.DevOps, parent: null, name: 'Fume' },

	/* Data */
	'mysql': { category: Category_Keys.Database, parent: null, name: 'MySQL' },
	'postgres': { category: Category_Keys.Database, parent: null, name: 'PostgreSQL' },

	/* QA */
	'robot': { category: Category_Keys.QA, parent: null, name: 'Robot Framework' },
	'testrail': { category: Category_Keys.QA, parent: null, name: 'TestRail' },
	'qtest': { category: Category_Keys.QA, parent: null, name: 'qTest' },

	/* Documentation */
	'confluence': { category: Category_Keys.Documentation, parent: null, name: 'Confluence' },
	'coda': { category: Category_Keys.Documentation, parent: null, name: 'Coda' },
	'airtable': { category: Category_Keys.Documentation, parent: null, name: 'Airtable' },
	'redocly': { category: Category_Keys.Documentation, parent: null, name: 'Redocly' },    

	/* Process/Tools */
	'jira': { category: Category_Keys.Process_Tools, parent: null, name: 'JIRA' },
	'zenhub': { category: Category_Keys.Process_Tools, parent: null, name: 'Zenhub' },
	'linearb': { category: Category_Keys.Process_Tools, parent: null, name: 'LinearB' },
	'honeycomb': { category: Category_Keys.Process_Tools, parent: null, name: 'Honeycomb.io' },
	'drata': { category: Category_Keys.Process_Tools, parent: null, name: 'Drata' },
	'agile': { category: Category_Keys.Process_Tools, parent: null, name: 'Agile' },
	'kanban': { category: Category_Keys.Process_Tools, parent: null, name: 'Kanban' },

	/* Development */
	'php': { category: Category_Keys.Development, parent: null, name: 'PHP' },
	'javascript': { category: Category_Keys.Development, parent: null, name: 'JavaScript' },
	'css': { category: Category_Keys.Development, parent: null, name: 'CSS' },
	'nuxt': { category: Category_Keys.Development, parent: null, name: 'Nuxt.js' },
	'vue': { category: Category_Keys.Development, parent: null, name: 'Vue.js' },
	'typescript': { category: Category_Keys.Development, parent: null, name: 'TypeScript' },
	'laravel': { category: Category_Keys.Development, parent: null, name: 'Laravel' },
	'tailwind': { category: Category_Keys.Development, parent: null, name: 'Tailwind CSS' },
	'git': { category: Category_Keys.Development, parent: null, name: 'Git' },
	'yarn': { category: Category_Keys.Development, parent: null, name: 'Yarn' },
}