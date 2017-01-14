var Config = function() {
    
    var host = 'collab-stopwatch-srv.herokuapp.com';
    var port = 80;
    var protocol = 'http';
    var restfull_version = 1;
    
    this.title = 'COLLAB Stopwatch';
    this.version = '0.9.1-BETA';
    this.author = { 
        name: 'Pedro Robson Leão',
        email: 'pedro.leao@gmail.com',
        image: 'images/photo.jpg',
        social: [
            [ 'facebook', 'https://www.facebook.com/pedro.r.leao'],
            [ 'twitter', 'https://twitter.com/pedrorobsonleao'],
            [ 'instagran', 'https://www.instagram.com/pedrorobsonleao/'],
            [ 'Google+', 'https://plus.google.com/+PedroRobsonLe%C3%A3o']
        ],
        collab: [
            'Bruno Savi',
            'Dailton Almeida',
            'Henrique Magarotto',
            'Luiz Henrique Rapatão',
            'Marco Antonio Martins',
            'Will Lobato',
            'Yuri Berezin Alves',
            'Zanata'
            ]
    };
    
    this.url = (uri=null) => {
        
        var url = protocol + '://';
        url += host;
        url += ((port)?':'+port:'');
        url += restfull_version + '/' + (!uri)?'':uri;
        
        return url;
    };
    
};

var config = new Config();
