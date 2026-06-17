import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  console.log('data log:', todos);

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.created_at}</li>
      ))}
    </ul>
  )
}