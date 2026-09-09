import { logout } from '@/db/auth';
export async function POST(request:Request){await logout(request);return Response.json({ok:true},{headers:{'Set-Cookie':'forge_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'}})}
