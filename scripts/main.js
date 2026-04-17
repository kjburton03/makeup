import { generateEyeHTML } from "./eye-list.js";
import { renderEyeToDOM } from "./eye-render.js";
import { generateFaceHTML } from "./face-list.js";
import { renderFaceToDOM } from "./face-render.js";

const faceHTML = generateFaceHTML()
renderFaceToDOM(faceHTML)

const eyeHTML = generateEyeHTML()
renderEyeToDOM(eyeHTML)