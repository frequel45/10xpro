"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function Header () {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  console.log(user);

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  if(user) {
    router.push('/members');
  }
  return (
    <nav className="flex items-center justify-between mx-auto p-8">
      <Link href="/" className="font-bold text-3xl">Home</Link>

      <div className="space-x-4 test-xl flex items-center">

      {
        user && (
          <Image 
          src={user.picture!} 
          width={50}
          height={50} 
          alt="user photo"
          className="rounded-full"
          />
        )
      }

      { user ? ( <Link href="/api/auth/logout">Logout</Link> ) : (<Link href="/api/auth/login">Login</Link> )
         }  

        {user && (<Link href="/members">Content</Link>)}
       {user && (<Link href="/members/new">Create</Link>)}
       <Link href="/about">About</Link> 
       </div>
    </nav>
  )
}