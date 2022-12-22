module.exports = app => {
  const Stat = app.mongoose.model('Stat', {
    users: Number,
    categories: Number,
    articles: Number,
    createdAt: Date
  })

  const get = (req, res) => {
    Stat.findOne({}, {}, { sort: { 'createdAt': -1 } })
      .then(stat => {
       
        const defaulStat = {
          users: 0,
          categories: 0,
          articles: 0,
          createdAt: new Date()
        }

        stat ? res.json(stat) : res.send(defaulStat)
      })
  }

  return { Stat, get }
}