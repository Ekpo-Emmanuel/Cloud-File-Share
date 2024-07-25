import Header from './_components/Header'
import Hero from './_components/Hero'
import { SESSION_COOKIE_NAME } from "../constants";
import { cookies } from "next/headers";
import { AuthContextProvider } from "../contexts/AuthContext";


export default function Home() {
  const session = cookies().get(SESSION_COOKIE_NAME)?.value || null;

  return (  
    <div>
      <Header session={session} />
      <Hero />
    </div>
  )
}
