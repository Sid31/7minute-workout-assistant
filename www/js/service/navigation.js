app.factory('navigation', function() {
    return {
        viewName: "",
        headline: "",
        leftLink: "",
        leftIcon: "",
        rightLink: "",
        rightIcon: "",
        initialize: function(viewName, headline) {
            this.viewName = viewName || this.viewName;
            this.headline = headline || this.headline;
            this.rightIcon = "";
            this.rightLink = "";
            this.leftIcon = "";
            this.leftLink = "";
        }
    };
});