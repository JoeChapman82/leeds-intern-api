module.exports = (api) => {

    api.get('/', (req, res) => {
        res.send('hey');
    });


    return api;
};
