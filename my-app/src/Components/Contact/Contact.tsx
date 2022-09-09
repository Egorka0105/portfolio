import React, { FC } from 'react';
import { useAppSelector } from 'core/interfaces';
import clN from './contact.module.scss';
import Form from './Form/Form';
import ModalWindowNavAnimation from '../ModalWindowNavAnimation/ModalWindowNavAnimation';
import Phone from '../Banner/Phone';

const Contact: FC = () => {
	const checkClickForm = useAppSelector(state => state.portfolio.contactIsOpen);

	return (
		<>
			<ModalWindowNavAnimation />
			<div className={clN.contact}>
				<div className={clN.formWrapper}>
					<h2 className={clN.title}>Contact me</h2>

					<p className={clN.subTitle}>
						{checkClickForm && 'Maybe call???'}
						{!checkClickForm && 'If you have any questions or suggestions, feel free to fill out the form.'}
					</p>

					{!checkClickForm && <Form />}
					{checkClickForm && <Phone />}
				</div>

				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794260.9638215215!2d27.867729789254135!3d49.16355748288198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65195a6489%3A0xcbd4e159eedd74fe!2z0JLQuNC90L3QuNGG0LAsINCS0LjQvdC90LjRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e0!3m2!1sru!2sua!4v1650811751058!5m2!1sru!2sua"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</>
	);
};

export default Contact;
