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

hello_world = User.create!(username: 'hello', email: 'a@z', password: 'world!')
onepun = User.create!(username: '1punman', email: 'saitama', password: 'password')

Video.delete_all

p "start of video 1"

video1 = Video.create!({
  title: "Kevin MacLeod _ Scheming Weasel (faster version)",
  uploader_id:  onepun.id
})

thumb1 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/Kevin+MacLeod+_+Scheming+Weasel+(faster+version).jpg')
vid1 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/Kevin+MacLeod+_+Scheming+Weasel+(faster+version).mp4')
video1.video_file.attach(io: vid1, filename: 'schemingweasel.mp4')
video1.thumbnail.attach(io: thumb1, filename: 'schemingweasel.jpg')

p "done video 1"


video2 = Video.create!({
  title: "Ghostbusters   Are you God",
  uploader_id:  onepun.id
})

thumb2 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/Ghostbusters+++Are+you+God.jpg')
vid2 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/Ghostbusters+++Are+you+God.mp4')
video2.video_file.attach(io: vid2, filename: 'ghostbustersareyougod.mp4')
video2.thumbnail.attach(io: thumb2, filename: 'ghostbustersareyougod.jpg')

p "done video 2"


video3 = Video.create!({
  title: "Steamed Hams",
  uploader_id:  hello_world.id
})

thumb3 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/Steamed+Hams.jpg')
vid3 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/Steamed+Hams.mp4')
video3.video_file.attach(io: vid3, filename: 'steamedhams.mp4')
video3.thumbnail.attach(io: thumb3, filename: 'steamedhams.jpg')



p "done video 3"


video4 = Video.create!({
  title: "Baseball Star Kris Bryant Gets Pranked by Hall of Famer Greg Maddux",
  uploader_id:  hello_world.id
})

thumb4 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/thumbnails/Baseball+Star+Kris+Bryant+Gets+Pranked+by+Hall+of+Famer+Greg+Maddux.jpg')
vid4 = open('https://dackroydisales-nutube-dev.s3-us-west-1.amazonaws.com/videos/Baseball+Star+Kris+Bryant+Gets+Pranked+by+Hall+of+Famer+Greg+Maddux.mp4')
video4.video_file.attach(io: vid4, filename: 'madduxpranksbryant.mp4')
video4.thumbnail.attach(io: thumb4, filename: 'madduxpranksbryant.jpg')
