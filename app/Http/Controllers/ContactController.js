'use strict'

const Mail = use('Mail')

class ContactController {

	* versturen (request, response) {

		const input = {
			'naam': request.input('naam'),
			'email': request.input('email'),
			'onderwerp': request.input('onderwerp'),
			'bericht': request.input('bericht')
		};

		yield Mail.send('emails.contact', input, (message) => {
			message.to('mace@macemuilman.nl', 'Mace Muilman');
			message.from('no-reply@macemuilman.nl');
			message.subject('Contact formulier ingevuld op macemuilman.nl');
		});

		request.with({ gelukt: 'true' }).flash();

		return response.route('contact');

	}

}

module.exports = ContactController
