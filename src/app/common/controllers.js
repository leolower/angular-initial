function CommonController(CommonService) {
    var that = this;
    that.items = [];

    CommonService.query().then(function(response) {
        that.items = response;
    });
}
