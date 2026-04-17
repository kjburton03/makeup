import { database } from "./database.js";

export const generateFriendHTML = () => {
let friendHTML = '';

    for (const friend of database.friend) {
        friendHTML += `
    
        <article class="friend">
            <h2> ${friend.name} </h2>
            <p> ${friend.description} </p>
            <p> ${friend.cost} </p>
        </article>
        `;
    }
    return friendHTML ;

};