const _    = require('lodash');
const fs   = require('fs');
const path = require('path');


module.exports = (() => 
  {

    let configs    = [];
    let configDir = (process.env['CONFIGDIR'])?process.env['CONFIGDIR']:path.resolve(__dirname);
    let env       = (process.env['RUNTIME'])?process.env['RUNTIME']:'prod';
    let files     = fs.readdirSync(configDir);

    files.forEach((file) =>
      {
        if (file.startsWith('base') || file.startsWith(env))
          { configs.push(require(path.join(configDir, file))); }
      });

    return(_.merge({}, ...configs));

  })();