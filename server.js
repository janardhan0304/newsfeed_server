import Connect from './database/Conncetion.js';
import app from './app.js';

Connect()
const PORT=8000;
app.listen(PORT,()=> console.log(`Server started in PORT ${PORT}`))
