import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json({
		status: 'ok',
		service: 'Gwenaël PIGAT Portfolio - Orizenh',
		timestamp: 'active'
	});
};
