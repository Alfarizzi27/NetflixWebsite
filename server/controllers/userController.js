const { User, Movie, Genre, Casts, sequelize } = require('../models')
const { createToken, verifyToken } = require('../helpers/jwt')
const bcrypt = require('bcryptjs')

class UserController {
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body

            const datas = await User.create({
                username,
                email,
                password,
                phoneNumber,
                address
            })

            res.status(201).json({ id: datas.id, username: datas.username, email: datas.email, phoneNumber: datas.phoneNumber, address: datas.address })
        } catch (error) {
            next(error)
        }

    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "Email or Password cannot NULL" }
            }

            const datas = await User.findOne({ where: { email } })

            if (!datas) {
                throw { name: "Invalid Email/Password" }
            }

            const checkPassword = bcrypt.compareSync(password, datas.password)

            if (!checkPassword) {
                throw { name: "Invalid Email/Password" }
            }

            const payload = {
                id: datas.id
            }

            const access_token = createToken(payload)
            res.status(200).json({ access_token })

        } catch (error) {
            next(error)
        }
    }

    static async fetchMovie(req, res, next) {
        try {
            const movies = await Movie.findAll()
            res.status(200).json(movies)
        } catch (error) {
            next(error)
        }
    }

    static async detailMovie(req, res, next) {
        try {
            const id = req.params.id
            const detailMovie = await Movie.findByPk(id)

            if (!detailMovie) {
                throw { name: "Movie not found" }
            }

            res.status(200).json(detailMovie)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async fetchGenre(req, res, next) {
        try {
            const genre = await Genre.findAll()

            res.status(200).json(genre)
        } catch (error) {
            next(error)
        }
    }

    static async createMovie(req, res, next) {
        try {
            const { title, synopsis, trailerUrl, rating, genreId, authorId, imgUrl, cast } = req.body
            const t = await sequelize.transaction();

            const movies = await Movie.create({ title, synopsis, trailerUrl, rating, genreId, authorId, imgUrl }, { transaction: t })

            let datasCast = cast.map(el => {
                return JSON.parse(el)
            })

            datasCast = datasCast.map(el => {
                el.movieId = movies.id
                el.createdAt = el.updatedAt = new Date()
                return el
            })

            const createCast = await Casts.bulkCreate(datasCast, { transaction: t })

            await t.commit()
            res.status(201).json({ movies, createCast })
        } catch (error) {
            console.log(error);
            await t.rollback()
            next(error)
        }
    }

    static async createGenre(req, res, next) {
        try {
            const name = req.body.name
            const genres = await Genre.create({ name })
            res.status(201).json(genres)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = UserController