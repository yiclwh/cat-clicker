var model = {
    init: function() {
        this.cats = [
            {name:"Ascension", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/9/18/enhanced-buzz-12235-1397080971-15.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Chris", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/4/16/enhanced-26562-1396642697-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Penguin", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/9/18/enhanced-buzz-10808-1397080850-13.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Captain", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-10419-1396642697-10.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Alexander", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/3/11/enhanced-buzz-11461-1396539307-5.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Kitten", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-23752-1396643152-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
            {name:"Displeased", click:0, link:"https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr08/9/14/original-11796-1397069419-13.jpg?downsize=715:*&output-format=auto&output-quality=auto"},
        ];
        this.currentCat = this.cats[0];
    },
    getAllCats: function() {
        return this.cats;
    }
};


var octopus = {
    getCats: function() {
        return model.getAllCats();
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    incrementCounter: function() {
        model.currentCat.click++;
        catview.render();
    },

    init: function() {
        model.init();
        catListView.init();
        catview.init();
    }
};

var catview = {
    init: function() {
        this.catimg = $('#cat-pic');
        this.clickcount = $('#click-count');
        this.catname = $('#cat-name');

        this.catimg.on('click', function(e) {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        this.clickcount.html(currentCat.click);
        this.catname.html(currentCat.name);
        this.catimg.attr('src', currentCat.link);
    }
};

var catListView = {
    init: function() {
        this.catlist = $('#cats');
        this.render();
    },

    render: function() {
        var cats = octopus.getCats();

        this.catlist.innerHTML = '';

        for(var i = 0; i < cats.length; i++) {
            var cat = cats[i];

            var elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function(cat) {
                return function() {
                    octopus.setCurrentCat(cat);
                    catview.render();
                };
            })(cat));

            this.catlist.append(elem);
        }       
    }
};


octopus.init();