export const query = `# Welcome to playground

table Profiles {
  id id
  avatar string
}

table Users {
  id id
  name string
  email string unique index
  created_at current
  role string

  if role = "admin" || "editor" || "guest"

  Profiles id optional
}

table Posts {
  title string
  content string
  rating int

  if rating >= 0
  if rating <= 5

  Users
}

get Users {
  id
  name
  email
  if email = "test@test.com"

  -> Profile {
    if avatar != "default.png"
  }
}

new Users {
  name "John Doe"
  email "johndoe@test.com"
}

set Users {
  name "Public"
  if name = "Anon"
}

get Users {
  name
  -> Profiles {
    avatar
  }
}

get Posts {
  rating
  total_posts: count(id)
  group rating
  if count(id) > 10
}

delete Users {
  if id = 1
}`;
