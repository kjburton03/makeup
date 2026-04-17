import { database } from "./database.js";

export const generateEyeHTML = () => {
    let eyeHTML = '';

    for (const eye of database.eye) {
        eyeHTML += `
        <article class="eyeList">
            <h2 class="eye__name"> ${eye.name} </h2>
            <p class="eye__description"> ${eye.description} </p>
            <p class="eye__price" > ${eye.cost} </p>
        </article>
        `
    }   
    return eyeHTML;
};