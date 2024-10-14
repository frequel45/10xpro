"use server";
import dbClient from "@/db/mongodb";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { Member } from "@/types";


 export const editMemberAction = async (member: Member) => {
  await dbClient
  .db('next-members')
  .collection<Member>('members')
  .findOneAndUpdate({_id: new ObjectId(member._id)}, {
    $set: {
      name: member.name,
      avatar: member.avatar,
      desc: member.desc
    }
  })

  redirect(`/members/${member._id}`)

}

export const createMember = async(formData: FormData) => {
  

  const name = formData.get('name') as string;
  const avatar = formData.get('avatar') as string;
  const desc = formData.get('desc') as string;

  const member = await dbClient
  .db('next-members')
  .collection('members')
  .insertOne({name, avatar, desc, createdAt: new Date().toISOString()})

  console.log(member);
  redirect('/members')


 }


export const deleteMember = async(id: ObjectId) => {
  await dbClient
  .db("next-members")
  .collection("members")
  .findOneAndDelete({_id: new ObjectId(id)});

  redirect("/members");
}
