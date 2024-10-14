import { createMember } from "@/actions"


export default function MemberCreatePage() {
  return (
    <form action={createMember}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-green-700 p-5 rounded bg:black-500">
      <h3 className="font-bold m-3 color-black-200">Create new member</h3>

      <div className="flex gap-4 text-black">
        <label htmlFor="name" className="w-full text-white">Name</label>
        <input type="text" name="name" id="name" className="text-black-200" />
      </div>

      <div className="flex gap-4 text-black">
        <label htmlFor="avatar" className="w-full text-white">Avatar</label>
        <input type="text" name="avatar" id="avatar" className="text-black-200" />
      </div>

      <div className="flex gap-4 text-black">
        <label htmlFor="desc" className="w-full text-white">Description</label>
        <input type="text" name="desc" id="desc" className="text-black" />
      </div>

      <button type="submit" className="rounded bg-yellow-500 p-2 w-full">Create</button>
      </div>
    </form>
  )
}