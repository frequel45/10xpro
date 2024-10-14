import MemberItem from "@/components/member-item";
import dbClient from "@/db/mongodb";
import { Member } from "@/types";
import { ObjectId } from "mongodb";

export default async function MembersPage() {
  const members = await dbClient
  .db('next-members')
  .collection<Member>('members')
  .find()
  .toArray();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">Content Page</h1>
     <div className="flex flex-wrap gap-5">
       {members.map((member) => <MemberItem member={member} key={`${new ObjectId(member._id)}`} />)}
     </div>
  </div>
  );
}
