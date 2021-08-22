import * as React from 'react';
import {FC, Suspense, useEffect} from 'react';
export const decorators = [
	(Story: FC) => {
		return (
			<Story/>
		)
	},
];
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
	docs: {
	}
};
interface ITheme  {
	name: string
	description: string
	defaultValue: string
	toolbar: {
		icon: string,
		items: string[]
	}
}
interface IGlobalTypes {
	theme: ITheme
}
export const globalTypes: IGlobalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'bootstrap',
		toolbar: {
			icon: 'paintbrush',
			items: [
			],
		},
	},
};