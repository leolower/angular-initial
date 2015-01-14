function Module1Controller(Module1Service) {
    var that = this;
    that.items = [];

    Module1Service.query().then(function(response) {
        that.items = response;
    });
}
