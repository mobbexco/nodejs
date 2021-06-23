import Request from '../requests';
import schema from '../models/subscriberModel';
import { Subscriber as SubscriberModel } from '../types';

export class Subscriber {
	requestManager: Request = new Request();

	create = (id: string, body: SubscriberModel): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber`,
				method: 'POST',
				schema
			},
			body
		);
	};

	all = (id: string, page?: number): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber?page=${page}`,
			method: 'GET'
		});
	};

	find = (id: string, sid: string): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}`,
			method: 'GET'
		});
	};

	edit = (
		id: string,
		sid: string,
		body: Record<string, unknown>
	): Promise<unknown> => {
		id;
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber/${sid}`,
				method: 'POST'
			},
			body
		);
	};

	suspend = (id: string, sid: string): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}/action/suspend`,
			method: 'GET'
		});
	};

	activate = (id: string, sid: string): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}/action/activate`,
			method: 'GET'
		});
	};

	reschedule = (
		id: string,
		sid: string,
		body: Record<string, unknown>
	): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber/${sid}/action/reschedule`,
				method: 'POST'
			},
			body
		);
	};

	move = (
		id: string,
		sid: string,
		body: Record<string, unknown>
	): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber/${sid}/action/move`,
				method: 'POST'
			},
			body
		);
	};

	retryExecution = (id: string, sid: string, eid: string): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}/execution/${eid}/action/retry`,
			method: 'GET'
		});
	};

	setPaidExecution = (
		id: string,
		sid: string,
		eid: string
	): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}/execution/${eid}/action/paid`,
			method: 'GET'
		});
	};

	manualExecution = (id: string, sid: string): Promise<unknown> => {
		return this.requestManager.create({
			path: `/subscriptions/${id}/subscriber/${sid}/execution`,
			method: 'GET'
		});
	};

	manualDiffExecution = (
		id: string,
		sid: string,
		body: Record<string, unknown>
	): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber/${sid}/execution`,
				method: 'POST'
			},
			body
		);
	};

	massiveManualExecution = (
		id: string,
		body: Record<string, unknown>[]
	): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/p/subscriptions/${id}/action/execute`,
				method: 'POST'
			},
			body
		);
	};

	scheduledExecution = (
		id: string,
		sid: string,
		body: Record<string, unknown>
	): Promise<unknown> => {
		return this.requestManager.create(
			{
				path: `/subscriptions/${id}/subscriber/${sid}/action/schedule`,
				method: 'POST'
			},
			body
		);
	};
}

export default new Subscriber();
