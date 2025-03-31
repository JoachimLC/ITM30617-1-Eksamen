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
        "log": log[]->{
          _id,
          date,
          action,
          hoursSpent,
          "member": member->name
        }
      }`,
      { id }
    );
    return member;
  };

export const getAllLogs = async () => {
  const query = `
    *[_type == "logItem"]{
      _id,
      date,
      action,
      hoursSpent,
      "memberName": member->name,
      "memberId": member->_id
    } | order(date desc)
  `;
  return await client.fetch(query);
};

export const getLogsByMemberId = async (memberId) => {
  const query = `
    *[_type == "logItem" && member._ref == $memberId]{
      _id,
      date,
      action,
      hoursSpent,
      "memberName": member->name,
      "memberId": member->_id
    } | order(date desc)
  `;
  return await client.fetch(query, { memberId });
};



const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";
  return builder.image(source)
}