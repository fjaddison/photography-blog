function home(req, res) {  
    res.render('pictures-index');
  }
  


function titlePage(req, res) {  
    res.render('pictures-show');
  }
  
  module.exports = {
    home: home,
    titlePage: titlePage,
}  
