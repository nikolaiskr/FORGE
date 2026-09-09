import { resetDays } from '@/db/days';
export async function POST(request:Request){const id=request.headers.get('oai-authenticated-user-id');if(!id)return Response.json({error:'Требуется вход'},{status:401});await resetDays(id);return Response.json({ok:true})}
