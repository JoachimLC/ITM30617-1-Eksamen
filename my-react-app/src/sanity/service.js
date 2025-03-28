import client from "./client";
import imageUrlBuilder from '@sanity/image-url'

export const getAllGroupMembers = async () => {
    const members = await client.fetch(
      `*[_type == "groupMember"]{
        _id,
        name,
        email,
        image,
        interests,
        biography,
        "log": log[]->{
          _id,
          date,
          action,
          hoursSpent,
          "member": member->name
        }
      }`
    );
    return members;
  };
  



export const getGroupMemberById = async (id) => {
    const member = await client.fetch(
      `*[_type == "groupMember" && _id == $id][0]{
        _id,
        name,
        email,
        image,
        interests,
        biography,
        logs[]{
          _id,
          date,
          action,
          hoursSpent
        }
      }`,
      { id }
    );
    return member;
  };

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";
  return builder.image(source)
}