
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: "weston",
      name: "Weston Woodard",
      email_address: "westonwoodard@gmail.com",
      phone_number: "555-555-5555",
      address_line: "123 Hobbit St",
      address_state: "AZ",
      address_city: "Bilboshire",
      zip_code: "55555",
      password: ""
    },
    {
      username: "nate",
      name: "Nate Pace",
      email_address: "natepace@gmail.com",
      phone_number: "444-444-4444",
      address_line: "124 Hobbit St",
      address_state: "AZ",
      address_city: "Bilboshire",
      zip_code: "55555",
      password: ""
    },
    {
      username: "connie",
      name: "Connie Reynolds",
      email_address: "conniereynolds@gmail.com",
      phone_number: "333-333-3333",
      address_line: "125 Hobbit St",
      address_state: "AZ",
      address_city: "Bilboshire",
      zip_code: "55555",
      password: ""
    }
  ]);
}