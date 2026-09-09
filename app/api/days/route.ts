import { listDays, saveDay, type StoredDay } from '@/db/days';
export async function GET(){try{return Response.json({days:await listDays()})}catch{return Response.json({days:[]},{status:503})}}
export async function POST(request:Request){const day=await request.json() as StoredDay;if(!/^\d{4}-\d{2}-\d{2}$/.test(day.date))return Response.json({error:'Неверная дата'},{status:400});try{return Response.json({day:await saveDay(day)})}catch{return Response.json({error:'Не удалось сохранить день'},{status:503})}}
