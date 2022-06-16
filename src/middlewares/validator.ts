import { body } from 'express-validator'

const alpha = "abcdefghijklmnopqrstuvwxyz "
const upperAlpha = alpha.toUpperCase()
const symbolsNumber = "+-().1234567890?!*&% "

const validator = [
    body("username").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("email").isEmail().withMessage("email-invalid"),
    body("email").escape(),
    body("content").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("heading").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("author").isWhitelisted(`${alpha}${upperAlpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("topic").isWhitelisted(`${alpha}${upperAlpha}`).withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
]

export default validator