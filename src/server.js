import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
      post: Model,
    },

    seeds(server) {
      server.create("post", { id: '1', title: "Inmensae subtilitatis, obscuris et malesuada fames.", description: 'Cum sociis natoque penatibus et magnis dis parturient. Paullum deliquit, ponderibus modulisque suis ratio utitur. Cum ceteris in veneratione tui montes, nascetur mus. Non equidem invideo, miror magis posuere velit aliquet.', author: 'bdylan' })
      server.create("post", { id: '2', title: "Inmensae subtilitatis, obscuris et malesuada fames.", description: 'Cum sociis natoque penatibus et magnis dis parturient. Paullum deliquit, ponderibus modulisque suis ratio utitur. Cum ceteris in veneratione tui montes, nascetur mus. Non equidem invideo, miror magis posuere velit aliquet.', author: 'fsinatra' })
      server.create("post", { id: '3', title: "Inmensae subtilitatis, obscuris et malesuada fames.", description: 'Cum sociis natoque penatibus et magnis dis parturient. Paullum deliquit, ponderibus modulisque suis ratio utitur. Cum ceteris in veneratione tui montes, nascetur mus. Non equidem invideo, miror magis posuere velit aliquet.', author: 'bdylan' })
      server.create("user", { firstName: "Bob", lastName: 'Dylab', username: 'bdylan', email: 'bdylan@test.co', role: 'admin' })
      server.create("user", { firstName: "Frank", lastName: 'Sinatra', username: 'fsinatra', email: 'fsinatra@test.co', role: 'manager' })
      server.create("user", { firstName: "Duck", lastName: 'Duck', username: 'duck', email: 'duck@test.co', role: 'guest' })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", schema => {
        return schema.users.all()
      })

      this.get("/posts", schema => {
        return schema.posts.all()
      })
    },
  })

  return server
}
