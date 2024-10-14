
import Image from "next/image";
import { notFound } from "next/navigation";
import dbClient from "@/db/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
import { deleteMember } from "@/actions";

interface MembersPageProps {
  params: {
    id: string;
  }
}

export default async function MemberPage(props: MembersPageProps) {
  
  const member = await dbClient
  .db('next-members')
  .collection('members')
  .findOne({_id: new ObjectId(props.params.id)})

  if(!member) {
    return notFound()
  }

  

  return (
    <div className=" mx-auto bg-blue-1000 md:mx-auto">

     <div className="p-2 flex items-center bg-blue-700 md:p-1">
      
      <Image width={600} height={800} src={member.avatar} alt="member photo"  className="border-4 rounded-100%"/>

      <div className="flex-col text-white ml-5 md:ml-2.5">
      <div className="text-2xl font-bold">{member.name}</div>
      <div className="text-black">Created At: {member.createdAt}</div>
      <div className="text-1xl font-semibold">{member.desc}</div>
      </div>
      </div>

      <div className="flex gap-2 justify-end p-5 sm:justify-center">
      
          <Link href={`/members/${member._id}/edit`} className="bg-yellow-700 p-3 rounded">Edit</Link>
          
        <form action={deleteMember.bind(null, member._id)}>
          <button className="bg-red-700 p-3 rounded">Delete</button>
          </form>
      </div>


    </div>
  )
}