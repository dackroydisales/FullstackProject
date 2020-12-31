# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

# DEMO CREDENTIAL
demo = User.create!(username: 'Demo', email: 'demo@demo.co', password: '123456')
# END DEMO CREDENTIAL

hello_world = User.create!(username: 'hello', email: 'a@z.com', password: 'world!')
onepun = User.create!(username: '1punman', email: 'saitama@saitama.com', password: 'password')

Video.delete_all
Comment.delete_all
Like.delete_all

# -----------------------------------


video3 = Video.create!({
  title: "World's smallest cat 🐈- BBC",
  uploader_id:  onepun.id
})

thumb3 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/catsmol.jpg')
vid3 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/catsmol.mp4')
video3.video_file.attach(io: vid3, filename: 'catsmol.mp4')
video3.thumbnail.attach(io: thumb3, filename: 'catsmol.jpg')

like4 = Like.create!(is_like: true, video_id: video3.id, user_id: demo.id)


# -----------------------------------


video4 = Video.create!({
  title: "Chameleon Tongue In Slow Motion | One Life | BBC Earth",
  uploader_id:  onepun.id
})

thumb4 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/chameleon.jpg')
vid4 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/chameleon.mp4')
video4.video_file.attach(io: vid4, filename: 'chameleon.mp4')
video4.thumbnail.attach(io: thumb4, filename: 'chameleon.jpg')

comment1 = Comment.create!(comment_txt: "poor bug", video_id: video4.id, user_id: hello_world.id)
like1 = Like.create!(is_like: true, video_id: video4.id, user_id: hello_world.id)
like2 = Like.create!(is_like: false, video_id: video4.id, user_id: onepun.id)
like3 = Like.create!(is_like: true, video_id: video4.id, user_id: demo.id)

# -----------------------------------


video6 = Video.create!({
  title: "One Hundred Million Crabs | The Trials of Life | BBC Earth",
  uploader_id:  onepun.id
})

thumb6 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/crabs.jpg')
vid6 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/crabs.mp4')
video6.video_file.attach(io: vid6, filename: 'crabs.mp4')
video6.thumbnail.attach(io: thumb6, filename: 'crabs.jpg')

like5 = Like.create!(is_like: true, video_id: video6.id, user_id: hello_world.id)

# -----------------------------------


video7 = Video.create!({
  title: "Emperor Penguins Nurture a Snowball | Dynasties Preview | BBC Earth",
  uploader_id:  onepun.id
})

thumb7 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/emperor.jpg')
vid7 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/emperor.mp4')
video7.video_file.attach(io: vid7, filename: 'emperor.mp4')
video7.thumbnail.attach(io: thumb7, filename: 'emperor.jpg')

# -----------------------------------


video8 = Video.create!({
  title: "Iguana chased by killer snakes | Planet Earth II: Islands - BBC",
  uploader_id:  onepun.id
})

thumb8 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/iguana.jpg')
vid8 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/iguana.mp4')
video8.video_file.attach(io: vid8, filename: 'iguana.mp4')
video8.thumbnail.attach(io: thumb8, filename: 'iguana.jpg')


# -----------------------------------


video9 = Video.create!({
  title: "Lion Cubs Fight To Feed | This Wild Life | BBC Earth",
  uploader_id:  onepun.id
})

thumb9 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/lions.jpg')
vid9 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/lions.mp4')
video9.video_file.attach(io: vid9, filename: 'lions.mp4')
video9.thumbnail.attach(io: thumb9, filename: 'lions.jpg')

# -----------------------------------


video11 = Video.create!({
  title: "Meerkat Family Faces Off with Cobra | BBC Earth",
  uploader_id:  onepun.id
})

thumb11 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/meerkat.jpg')
vid11 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/meerkat.mp4')
video11.video_file.attach(io: vid11, filename: 'meerkat.mp4')
video11.thumbnail.attach(io: thumb11, filename: 'meerkat.jpg')


# -----------------------------------


video12 = Video.create!({
  title: "Monkeys DIVE Into Pool For Fun | Primates | BBC Earth",
  uploader_id:  onepun.id
})

thumb12 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/monkeys.jpg')
vid12 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/monkeys.mp4')
video12.video_file.attach(io: vid12, filename: 'monkeys.mp4')
video12.thumbnail.attach(io: thumb12, filename: 'monkeys.jpg')

# -----------------------------------


video13 = Video.create!({
  title: "Sweaty Mudskippers Try To Cool Down | Walk On The Wild Side | Funny Talking Animals | BBC Earth",
  uploader_id:  onepun.id
})

thumb13 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/mudskippers.jpg')
vid13 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/mudskippers.mp4')
video13.video_file.attach(io: vid13, filename: 'mudskippers.mp4')
video13.thumbnail.attach(io: thumb13, filename: 'mudskippers.jpg')

# -----------------------------------


video14 = Video.create!({
  title: "Super cute penguin chick tries to make friends | Snow Chick: A Penguin's Tale - BBC",
  uploader_id:  onepun.id
})

thumb14 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/penguin.jpg')
vid14 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/penguin.mp4')
video14.video_file.attach(io: vid14, filename: 'penguin.mp4')
video14.thumbnail.attach(io: thumb14, filename: 'penguin.jpg')

# -----------------------------------


video15 = Video.create!({
  title: "Swimming With a Humboldt Squid | Deadly 60 | BBC Earth",
  uploader_id:  onepun.id
})

thumb15 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/squid.jpg')
vid15 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/squid.mp4')
video15.video_file.attach(io: vid15, filename: 'squid.mp4')
video15.thumbnail.attach(io: thumb15, filename: 'squid.jpg')


# -----------------------------------


video17 = Video.create!({
  title: "How To Go To Space (with XKCD!)",
  uploader_id:  onepun.id
})

thumb17 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/space.jpg')
vid17 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/space.mp4')
video17.video_file.attach(io: vid17, filename: 'space.mp4')
video17.thumbnail.attach(io: thumb17, filename: 'space.jpg')

# -----------------------------------

video2 = Video.create!({
  title: "Steamed Hams",
  uploader_id:  hello_world.id
})

thumb2 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/Steamed+Hams.jpg')
vid2 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/Steamed+Hams.mp4')
video2.video_file.attach(io: vid2, filename: 'steamedhams.mp4')
video2.thumbnail.attach(io: thumb2, filename: 'steamedhams.jpg')

