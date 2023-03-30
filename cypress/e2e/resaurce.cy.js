describe('test api resaurce reqres', () => {
    it('get list resaurce', () => {
        cy.request("GET", "https://reqres.in/api/unknown")
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('gget single resaurce', () => {
        cy.request("GET", "https://reqres.in/api/unknown/2")
        .then((response) => {
            expect(response.status).to.eq(200)
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

})
