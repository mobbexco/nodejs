import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { assert } from 'chai';
import subscription from '../src/resources/subscription';

chai.use(chaiAsPromised);

const unauthorizedError = 'Request failed with status code 401';

describe('Subscription Module', () => {
	const id = 'mv4vuUGYG';
	describe('Successfully handle subscrptions', () => {
		it('Should make request to create a new subscription', () => {
			return assert.isRejected(
				subscription.create({
					total: 200.0,
					currency: 'ARS',
					name: 'Prueba',
					description: 'Prueba',
					type: 'dynamic',
					interval: '1m',
					trial: 1,
					limit: 0,
					webhook: 'http://webhook.com',
					return_url: 'http://return_url.com',
					features: ['accept_no_funds']
				}),
				unauthorizedError
			);
		});

		it('Should create a test suscription', () => {
			return assert.isRejected(
				subscription.create({
					total: 200.0,
					test: true,
					currency: 'ARS',
					name: 'Prueba',
					description: 'Prueba',
					type: 'dynamic',
					interval: '1m',
					trial: 1,
					limit: 0,
					webhook: 'http://webhook.com',
					return_url: 'http://return_url.com',
					features: ['accept_no_funds']
				}),
				unauthorizedError
			);
		});

		it('Should make request to edit the subscription', () => {
			return assert.isRejected(
				subscription.edit(id, {
					total: 300.0
				}),
				unauthorizedError
			);
		});

		it('Should make request to get all the subscriptions', () => {
			return assert.isRejected(subscription.all(), unauthorizedError);
		});

		it('Should make request to get the second page of subscriptions', () => {
			return assert.isRejected(subscription.all(2), unauthorizedError);
		});

		it('Should make request to find the subscription', () => {
			return assert.isRejected(subscription.find(id), unauthorizedError);
		});

		it('Should make request to active the subscription', () => {
			return assert.isRejected(subscription.activate(id), unauthorizedError);
		});

		it('Should make request to delete the subscription', () => {
			return assert.isRejected(subscription.delete(id), unauthorizedError);
		});
	});
});
