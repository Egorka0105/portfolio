// @ts-nocheck
/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
import clN from './index.module.scss';

export const MyPhotoCanvas = () => {
	const imageRef = useRef(null);

	return (
		<div className={clN.bannerCanvas}>
			<canvas ref={imageRef} id="myPhoto" />
		</div>
	);
};
