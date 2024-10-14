"use client";
import { ChangeEvent, useState } from "react";
import { Member } from "@/types";
import { editMemberAction } from "@/actions";

interface MemberEditFormPage {
  member: Member
}

export default function MemberEditForm(props: MemberEditFormPage) {
   const [member, setMember] = useState(props.member)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMember({...member, [e.target.name]: e.target.value})
  }

  
   return (
    <form action={editMemberAction.bind(null, member)}>

   <div className="flex flex-col gap-3 max-w-xl mx-auto bg-green-700 p-5 rounded bg:black-500">
        <h3 className="font-bold">Edit Member</h3>

         <div className="flex gap-5 text-black">
          <label htmlFor="name">Name</label>
          <input
           type="text"
           name="name" 
           id="name" 
           defaultValue={member.name}
           onChange={(e) => handleChange(e)}
           className="border rounded -2 w-full color-black-500" />
         </div>

         <div className="flex gap-5 text-black">
          <label htmlFor="avatar">Avatar</label>
          <input 
          type="text" 
          name="avatar" 
          id="avatar" 
          defaultValue={member.avatar}
          onChange={(e) => handleChange(e)}
          className="border rounded -2 w-full color-black-500" />
         </div>

         <div className="flex gap-5 text-black">
          <label htmlFor="desc">Description</label>
          <input
           type="text"
           name="desc" 
           id="desc" 
           defaultValue={member.desc}
           onChange={(e) => handleChange(e)}
           className="border rounded -2 w-full color-black-500" />
         </div>

         <button type="submit" className="rounded bg-yellow-500 p-2 text-white font-bold">Update</button>
        
      </div>
    </form>
   )
}