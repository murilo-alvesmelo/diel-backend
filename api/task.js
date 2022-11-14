const moment = require('moment')

module.exports = app => {
    const findAllTask = (req, res) =>{
        app.db('tasks')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(400).json(err))
    }
    const findTask = (req, res) =>{
        const date = req.query.date
            ? req.query.date
            : moment().endOf('day').toDate()

        app.db('tasks')
            .where('estimatedAt', '<=', date)
            .orderBy('estimatedAt')
            .then(tasks => res.json(tasks))
            .catch(err => res.status(400).json(err))
    }

    const create = async (req, res) =>{
        if(!req.body.desc.trim()){
            return res.status(400).send("Descrição é um campo obrigatorio")
        }
        await app.db('tasks')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).send(err))
    }

    const remove = (req, res) =>{
        app.db('tasks')
            .where('id', req.params.id)
            .del()
            .then( rowsDeleted =>{
                if(rowsDeleted > 0){
                    return res.status(204).send()
                }else{
                    const msg = `Não foi encontrada a task com id ${req.params.id}.`
                    return res.status(400).send(msg)
                }
            })
            .catch(err => res.status(400).send(err))
    }

    const update = (req, res) =>{
        app.db('tasks')
            .where('id', req.params.id)
            .update({
                desc: req.body.desc,
                estimatedAt: req.body.estimatedAt,
                duracao: req.body.duracao,
                doneAt: req.body.doneAt
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).send(err))

    }

    return { findTask, create, remove, findAllTask, update }
}

