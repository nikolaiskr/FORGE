import { getUser } from '@/db/auth';
export async function GET(request:Request){return Response.json({user:await getUser(request)})}
