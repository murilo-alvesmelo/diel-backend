module.exports = app => {
    //task routes

    //get e post
    app.route('/alltasks')
        .get(app.api.task.findAllTask)
    app.route('/tasks')
        .get(app.api.task.findTask)
        .post(app.api.task.create)    

    //delete
    app.route('/tasks/:id')
        .delete(app.api.task.remove)
    
    //put
    app.route('/tasks/:id')
        .put(app.api.task.update)

}