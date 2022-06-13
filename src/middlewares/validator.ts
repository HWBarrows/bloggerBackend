import { body } from 'express-validator'

const alpha = "abcdefghijklmnopqrstuvwxyz "
const upperAlpha = alpha.toUpperCase()
const symbolsNumber = "+-().1234567890?! "

const validator = [
    body("username").isWhitelisted(`${alpha}${upperAlpha}`).escape().withMessage("only-letters-from-the-Latin-alphabet-are-accepted"),
    body("email").isEmail().withMessage("email-invalid"),
    body("email").escape(),
    body("message").isWhitelisted(`${alpha}${upperAlpha}${symbolsNumber}`).escape().withMessage("only-letters-from-the-Latin-alphabet-are-accepted")
]

export default validator