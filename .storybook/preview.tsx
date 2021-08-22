import * as React from 'react';
import {FC, Suspense, useEffect} from 'react';
export const decorators = [
	(Story: FC) => {
		return (
			<Story/>
		)
	},
];