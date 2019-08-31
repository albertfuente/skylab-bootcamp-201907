const validate = require('./')
const { expect } = require('chai')

describe("validate", () => {
    

        describe("string", () => {
            it ("should detect that it's a string and not throw error", () => {
                validate.string("hello","string")
                expect(true).to.be.true
            })

            it ("should detect empty string", () => {
                //MODO CRUDO
                 /*    try {
                        validate.string()
                        throw Error('should not reach this point')
                   } catch ({message}) {
                        expect(message).to.equal("undefined with value undefined is not a string")
                   } */
                //MODO PRO
                  expect(() => { validate.string() }).to.throw(Error, "undefined with value undefined is not a string")

            })
       })

       

        describe("email", () => {
            it ("should detect that it's a email and not throw error", () => {
                validate.email("a.a@test.com","email")
                expect(true).to.be.true
            })
            it ("should throw error if the email is not a email", () => {
                expect(() => { validate.email("a.a@com","email") }).to.throw(Error, "email with value a.a@com is not a valid e-mail")
            })
        })

        describe("function", () => {
            it ("should detect that it's a function and not throw error", () => {
                const func = function funct() {}
                validate.function(func,"function")
                expect(true).to.be.true 
            })
            it ("should trow error if its not a function",() => {
                expect(() => { validate.function("hola", "function") }).to.throw(Error, "function with value hola is not a function")
            })
        })

        describe("url", () => {
            it ("should detect that it's a url and not throw error", () => {
                validate.url("www.url.com","url")
                expect(true).to.be.true 
            })
            it ("should throw error if its not a url ", () => {
                expect(() => { validate.url("hola", "url") }).to.throw(Error, "url with value hola is not a valid URL")
            })
        })
    })

