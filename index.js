const express = require('express');
const adminAuth = require('./adminAuth');
const multer = require('multer'); 
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './public');


// Разрешаем обработку данных из форм
app.use(express.urlencoded({ extended: true }));

app.get('/admin', adminAuth.authenticate('basic', { session: false }), (req, res) => {
  res.render('admin', { cards });
});
// Массив для хранения карточек
const cards = [];


// Маршрут для админ-панели
app.get('/admin', (req, res) => {
  res.render('admin', { cards });
});



// Маршрут для обработки отправленных форм
app.post('/admin', (req, res) => {
  const { title, link } = req.body;
  const card = { title, link };
  cards.push(card);
  res.redirect('/admin');
});

//Маршруты страниц
app.get('/', (req, res)=> {
  res.render('index')
})

app.get('/archive',(req, res) =>{
  res.render('archive', { cards })
})

app.get('/about', (req,res) =>{
  res.render('about')
})

app.get('/contacts', (req,res) =>{
  res.render('contacts')
})

app.get('/author', (req, res)=>{
  res.render('author')
})
app.use(express.static('public'));
app.listen(port, () => {
  console.log('Сервер запущен на порту 3000');
});