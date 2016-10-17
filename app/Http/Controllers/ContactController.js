'use strict'

const Mail = use('Mail')
const Validator = use('Validator')

class ContactController {

	* versturen (request, response) {

		const rules = {
			'naam': 'required',
			'email': 'required',
			'onderwerp': 'required',
			'bericht': 'required'
		}

		const input = {
			'naam': request.input('naam'),
			'email': request.input('email'),
			'onderwerp': request.input('onderwerp'),
			'bericht': request.input('bericht')
		};

		const validation = yield Validator.validate(input, rules);
		if (validation.fails()) {
			yield request.with({ errors: validation.messages() }).flash();
			return response.route('contact');
		}

		yield Mail.send('emails.contact', input, (message) => {
			message.to('mace@macemuilman.nl', 'Mace Muilman');
			message.from('no-reply@macemuilman.nl');
			message.subject('Contact formulier ingevuld op macemuilman.nl');
		});

		yield request.with({ gelukt: 'true' }).flash();

		return response.route('contact');

	}

}

module.exports = ContactController
