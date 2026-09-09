import { listDays, saveDay, type StoredDay } from '@/db/days';
import { getUser } from '@/db/auth';
export async function GET(request:Request){const user=await getUser(request);if(!user)return Response.json({error:'Требуется вход'},{status:401});try{return Response.json({days:await listDays(user.id)})}catch{return Response.json({days:[]},{status:503})}}
export async function POST(request:Request){const user=await getUser(request);if(!user)return Response.json({error:'Требуется вход'},{status:401});const day=await request.json() as StoredDay;if(!/^\d{4}-\d{2}-\d{2}$/.test(day.date))return Response.json({error:'Неверная дата'},{status:400});try{return Response.json({day:await saveDay(user.id,day)})}catch{return Response.json({error:'Не удалось сохранить день'},{status:503})}}
