import { generateFaceHTML } from "./face-list.js";
import { renderFaceToDOM } from "./face-render.js";

const faceHTML = generateFaceHTML()
renderFaceToDOM(faceHTML)