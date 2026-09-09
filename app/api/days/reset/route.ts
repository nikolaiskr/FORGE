import { resetDays } from '@/db/days';
import { getUser } from '@/db/auth';
export async function POST(request:Request){const user=await getUser(request);if(!user)return Response.json({error:'Требуется вход'},{status:401});await resetDays(user.id);return Response.json({ok:true})}
