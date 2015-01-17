function Module1Controller(Module1Service, some_array) {
    var that = this;
    that.name = 'Module1Controller';
    that.items = [];

    Module1Service.query().then(function(response) {
        that.items = response;
    });
}

Module1Controller.resolve = {
    some_array: function() {
        return ['some here', 'some there'];
    }
};
