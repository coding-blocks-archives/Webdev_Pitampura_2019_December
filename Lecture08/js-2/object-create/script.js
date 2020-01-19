let a = {
  p: 10,
  q: 'asdsa',
  r: true,
}

let b = Object.create(a)
b.x = 123
b.y = 'fghj'
b.z = false

let c = Object.create(b)
c.l = 364
c.m = 'dh'
c.n = true
