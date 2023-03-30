describe('test api reqres', () => {
    it('get list user', () => {
        cy.request("GET", "https://reqres.in/api/users?page=2")
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('get single user', () => {
        cy.request("GET", "https://reqres.in/api/users/2")
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('get single user not found', () => {
        cy.request
        ({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.exist
        })
    })

    it('post create user', () => {
        cy.request("POST", "https://reqres.in/api/users", {"name": "morpheus", "job": "leader"})
        .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
        })
    })

    it('put update user', () => {
        cy.request("PUT", "https://reqres.in/api/users/2", {"name": "morpheus", "job": "zion resident"})
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'zion resident')
        })
    })

    it('patch update user', () => {
        cy.request("PATCH", "https://reqres.in/api/users/2", {"name": "morpheus", "job": "zion resident"})
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'zion resident')
        })
    })

    it('delete user', () => {
        cy.request("DELETE", "https://reqres.in/api/users/2")
        .then((response) =>{
            expect(response.status).to.eq(204)
        })
    })

})