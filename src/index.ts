import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'
import cors from 'cors'
AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())
	app.use((req,res,next) =>{
		res.header("Access-Control-Allow-Origin", "*")
		app.use(cors());
		next()
	})
	
	app.use(routes)

	return app.listen(process.env.PORT)
})
