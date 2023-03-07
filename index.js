import express from 'express';

const app = express();
app.use(express.static("dist"))

app.get('*', (req, res) => {
    res.sendFile('dist/index.html')
  })
  
  const port = process.env.PORT || 8080
  app.listen(port, () => console.log(`listening on port ${port}`))
  