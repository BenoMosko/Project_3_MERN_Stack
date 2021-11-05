const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();

app.use(cors());

connectDB();

app.use(express.json({extended: false}));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/UsersRouter'));
app.use('/api/movies', require('./routes/api/MovieRouter'));
app.use('/api/members', require('./routes/api/MembersRouter'));
app.use('/api/subscriptions', require('./routes/api/SubscriptionsRouter'));

app.get('/', (request, response) => response.send('API Running'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));