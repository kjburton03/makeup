import { database } from './database.js';

export const generateFaceHTML = () => {
    let faceHTML = '';

    for ( const face of database.face) {
        faceHTML += `
        <article class="face">
            <h2 class="face__name"> ${face.name} </h2>
            <p class="face__description"> ${face.description} </p>
            <p class="face__price"> Price: $ ${face.cost} </p>
        </article>
        `;
    }
    return faceHTML;
}