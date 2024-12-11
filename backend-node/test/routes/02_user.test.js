//Testing de la ruta de usuarios
const request = require("supertest")
const globalTestConfig = require("../globalTestConfig")
const app = require("../../app")

describe("Users", () =>{

    // Test para obtener todos los usuarios
    it("Should get all users", async () =>{
        await request(app)
            .get("/users")
            .expect(200)
    })
    
    // Test para cambiar el rol de un usuario
    it("Should update user role", async () =>{
        await request(app)
            .put("/users/role")
            .set('Authorization', `Bearer ${globalTestConfig.token_admin}`) // Se necesita un token de administrador
            .send({"email":"testemail@gmail.com", "role": ["admin"]})
            .expect(200)
    })

    // Test para obtener un usuario
    it("Should update a user", async () =>{
        const response = await request(app)
            .put(`/users`)
            .set('Authorization', `Bearer ${globalTestConfig.token_user}`) // Se necesita autorización
            .send({"name": "Test1Updated", "age":20, "email":"testemail@gmail.com", "password": "testpassword1", "city":"cityTest","interests":["activityTest","activityTestUpdated"], "allowOffers": true})
            .expect(200)
        expect(response.body.data.name).toEqual("Test1Updated")
    })

})