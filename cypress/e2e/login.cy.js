describe('test api login reqres', () => {
  it('post login succes', () => {
      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          body:
          {
              "email": "eve.holt@reqres.in",
              "password": "cityslicka"
          }
      })
      .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property("token", "QpwL5tke4Pnpja7X4")
      })
  })

  it('post login unseccess', () => {
      cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/login',
          failOnStatusCode: false,
          body:
          {
              "email": "peter@klaven"
          }
      })
      .then((response) => {
          expect(response.status).to.eq(400)
          expect(response.body).to.exist
      })
  })
})