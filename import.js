const request = require('request');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const turndownService = new TurndownService({ gfm: true, converters: [
    {
      filter: 'section',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'div',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'figure',
      replacement: function(content) {
        return content;
      }
    },
    {
      filter: 'figcaption',
      replacement: function(content) {
        return content;
      }
    }
  ]
});
const fs = require('fs');
const url = require("url");
const path = require("path");

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      if (res)
      {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
    
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      }
    });
  };

function converyFromWebUrl(url)
{
  return new Promise(function(resolve, reject) {
    request({
      uri: url,
      method: 'GET'
    }, function (err, httpResponse, body) {

      if (err)
        return reject(err);

      let $ = cheerio.load(body);
      $('.e-content .uiScale').remove();
      // Remove first header
      $('.e-content h3').eq(0).remove();
      // Download an images
      $('.e-content img').each(function (i, result) {
          var oldLink = $(result).attr("src");
          console.log("Downloading image: " + oldLink);
          var newLink = "images/" + oldLink.substring(oldLink.lastIndexOf("/") + 1, oldLink.length);
          newLink = newLink.replace("*", "");
          newLink = newLink.replace("<", "");
          newLink = newLink.replace(">", "");
          newLink = newLink.replace(":", "");
          newLink = newLink.replace("|", "");
          newLink = newLink.replace("\"", "");
          newLink = newLink.replace("?", "");
          newLink = newLink + '.png';
          newLink = newLink.replace(".png.png", ".png");
          newLink = newLink.replace("..png", ".png");
          $(result).attr("src", "../" + newLink);
          download(oldLink, "./docs/" + newLink, function() {
            console.log("Downloaded image: " + oldLink + " to " + newLink);
          });
      });
      let html = $('.e-content').html() || '';
      let markdown = turndownService.turndown(html);

      resolve(markdown);

    });
  });
}

function convert(url, filePath, fileName)
{
    if (!fileName)
    {
        var parsed = url.parse(url);
        fileName = path.basename(parsed.pathname);
    }
    converyFromWebUrl(url)
    .then(function (markdown) {
        fs.writeFile(filePath + fileName + ".md", markdown, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var fileIndex = 0;
function convert2(mediumUrl, filePath, fileIndex)
{
    var parsed = url.parse(mediumUrl);
    var fileName = path.basename(parsed.pathname);
    fileName = fileName.replace("_Turnbase-RPG-Template---", "");
    fileName = fileName.replace("_turnbase-rpg-template---", "");
    fileName = fileName.substr(10, fileName.length - 28);
    fileName = pad(fileIndex, 3) + "-" + fileName;
    convert(mediumUrl, filePath, fileName);
    return fileName;
}

// Get index document with all links
request({
    uri: "http://localhost/medium-backup/2018-01-22_Turnbase-RPG-Template---Setup-guide-table-of-content-27c0e2832b80.html",
    method: 'GET'
  }, function (err, httpResponse, body) {

    if (err)
      return reject(err);

    let $ = cheerio.load(body);
    let sidebarContent = '- [Index](/)\n';
    $('.e-content .uiScale').remove();
    // Remove first header
    $('.e-content h3').eq(0).remove();
    $('.e-content a').each(function (i, result) {
        if ($(result).attr("href").startsWith("http://localhost/medium-backup/"))
        {
            var oldLink = $(result).attr("href");
            var newLink = "pages/" + convert2(oldLink, "./docs/pages/", ++fileIndex);
            $(result).attr("href", newLink);
            sidebarContent += '  - ['+$(result).text()+']('+newLink+')\n';
        }
    });
    let html = $('.e-content').html() || '';
    let markdown = turndownService.turndown(html);
    fs.writeFile("./docs/README.md", markdown, function(err) {
        if(err) {
            return console.log(err);
        }
    });
    fs.writeFile("./docs/_sidebar.md", sidebarContent, function(err) {
        if(err) {
            return console.log(err);
        }
    });
  });
