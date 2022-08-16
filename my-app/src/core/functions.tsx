import { BannerTitle } from 'core/interfaces';
import React from 'react';

export const bannerTitleCreate = (title: BannerTitle): React.ReactNode => {
	return title.map(el => {
		if (Array.isArray(el)) {
			const titleWordArray = el[0].split('');
			return titleWordArray.map(letter => {
				if (letter === ' ') return <>&nbsp;</>;
				return <span>{letter}</span>;
			});
		}
		if (el === 'br') {
			return <br />;
		}
		return el;
	});
};
