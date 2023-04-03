describe('test api resaurce reqres', () => {
    it('get list resaurce', () => {
        cy.request("GET", "https://reqres.in/api/unknown")
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.only('gget single resaurce', () => {
        cy.request("GET", "https://reqres.in/api/unknown/2")
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.property('id', 2)
            expect(response.body.data).to.have.property("name", "fuchsia rose")
            expect(response.body.data).to.have.property("year", 2001)
            expect(response.body.data).to.have.property("color","#C74375")
            expect(response.body.data).to.have.property("pantone_value", "17-2031")
        })
        })
    })

    it('get single resaurce not found', () => {
        cy.request
        ({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.exist
        })
  })

