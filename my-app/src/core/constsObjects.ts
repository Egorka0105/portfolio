import jira from 'assets/img/jira.svg';
import figma from 'assets/img/figma.svg';
import webstorm from 'assets/img/webstorm.svg';
import confluence from 'assets/img/confluence.svg';
import windows from 'assets/img/windows.svg';
import { IToolsIcon } from 'core/interfaces';

export const toolsIcons: IToolsIcon[] = [
	{
		key: 'figma00',
		element: figma,
		alt: 'figma',
	},
	{
		key: 'jira01',
		element: jira,
		alt: 'jira',
	},
	{
		key: 'confluence02',
		element: confluence,
		alt: 'confluence',
	},
	{
		key: 'webstorm03',
		element: webstorm,
		alt: 'webstorm',
	},
	{
		key: 'windows04',
		element: windows,
		alt: 'windows',
	},
];
