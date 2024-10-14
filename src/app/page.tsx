import Hero from "@/components/hero";
import Link from "next/link";


const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz-Z1y_2YNvH81A67gaxIXDjquxvGQY3AzQ&s';


export default function Home() {
 


  return (
    <div className="mx-auto lg:mb-12">

      <Hero imageUrl={url} imageAlt="Gen-image" heading="Generative AI" />

      <div className="border p-10 flex flex-col justify-center items-center rounded bg-slate-800 text-white mt-48 mx-60 h-80 shadow-xl">
        <div className="text-2xl font-bold underline">Good app for AI basics</div>

        <div className="text-2xl font-bold animate-bounce mt-10 mb-10">Get started for foundational experience on Generative AI</div>

        <div>
          <Link href="/api/auth/signup" className="font-bold bg-green-500 p-3 rounded text-white mt-5 shadow-md hover:bg-green-400 hover:cursor-pointer">Sign Up</Link>
        </div>
      </div>
     
    </div>
  );
}
