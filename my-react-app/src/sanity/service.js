import client from "./client";

export const getAllGroupMembers = async () => {
    const members = await client.fetch(`*[_type == "groupMember"]{name, date, email, image, interests, biography, logs}`)
    return members
}