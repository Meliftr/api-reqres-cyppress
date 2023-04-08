describe('test api register reqres', () => {
    it('post register success', () => {
        cy.request("POST", "/api/register", {"email": "eve.holt@reqres.in", "password": "pistol"})
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', 4)
            expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4')
        })
    })

    it('post register unsuccess', () => {
        cy.request({
            method: 'POST',
            url: '/api/register',
            failOnStatusCode: false,
            body: 
            {
                "email": "sydney@fife"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.exist
        })
    })
})