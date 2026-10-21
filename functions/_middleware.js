import { publicMaintenanceGate } from './_shared/maintenance.js';

export async function onRequest(context) {
  const response = await publicMaintenanceGate(context.request, context.env, 'ce');
  if (response) return response;
  return context.next();
}
