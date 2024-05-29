import { Resend } from 'resend';
// import BookingConfirmed from './templates/BookingConfirmed';

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
		html: `Your booking has been confirmed with aircnc. We wait to onboard you soon!`,
		// react: BookingConfirmed({ name: name, url: 'https://aircnc-jitunayak.vercel.app', bookingId: bookingId }),
	});
};
