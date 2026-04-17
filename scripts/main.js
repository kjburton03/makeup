import { generateEyeHTML } from "./eye-list.js";
import { renderEyeToDOM } from "./eye-render.js";
import { generateFaceHTML } from "./face-list.js";
import { renderFaceToDOM } from "./face-render.js";
import { generateFriendHTML } from "./tool-list.js";
import { renderFriendToDOM } from "./tool-render.js";

const faceHTML = generateFaceHTML()
renderFaceToDOM(faceHTML)

const eyeHTML = generateEyeHTML()
renderEyeToDOM(eyeHTML)

const friendHTML = generateFriendHTML()
renderFriendToDOM(friendHTML)