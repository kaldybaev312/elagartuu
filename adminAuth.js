const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const users = [
  { username: 'admin', password: 'elagartuu_kg2023' },
  { username: 'elagartuu', passsword: '0000'},
  
  // Другие пользователи, если необходимо
];

passport.use(new BasicStrategy((username, password, done) => {
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return done(null, false, { message: 'Неправильные учетные данные' });
  }

  return done(null, user);
}));

module.exports = passport;
