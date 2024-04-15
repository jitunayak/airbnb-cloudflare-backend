import { Resend } from 'npm:resend';
import BookingConfirmed from './templates/BookingConfirmed.tsx';

export const sendBookingConfirmationEmail = ({
	to,
	name,
	apiKey,
	bookingId,
}: {
	to: string;
	name: string;
	apiKey: string;
	bookingId: string;
}) => {
	const resend = new Resend(apiKey);

	return resend.emails.send({
		from: 'onboarding@resend.dev',
		to: to,
		subject: 'Airbnb booking confirmation',
		react: BookingConfirmed({ name: name, url: 'https://aircnc-jitunayak.vercel.app', bookingId: bookingId }),
	});
};
