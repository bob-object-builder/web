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
  Profiles id optional
}

table Posts {
  title string
  content string
  rating int
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
