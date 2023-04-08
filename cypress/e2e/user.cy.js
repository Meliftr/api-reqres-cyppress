describe('test api reqres', () => {
    it.only('get list user', () => {
        cy.request("GET", "https://reqres.in/api/users?page=2")
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("page", 2)
            expect(response.body).to.have.property("per_page", 6)
            expect(response.body).to.have.property("total", 12)
            expect(response.body).to.have.property("total_pages", 2)
            expect(response.body.data[0]).has.property('id', 7)
            expect(response.body.data[1]).has.property("email", "lindsay.ferguson@reqres.in")

        })
    })

    it('get single user', () => {
        cy.request("GET", "https://reqres.in/api/users/2")
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.property('id', 2)
            expect(response.body.data).to.have.property("email", "janet.weaver@reqres.in")
            expect(response.body.data).to.have.property("first_name", "Janet")
            expect(response.body.data).to.have.property("last_name", "Weaver")
            expect(response.body.data).to.have.property("avatar", "https://reqres.in/img/faces/2-image.jpg")
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