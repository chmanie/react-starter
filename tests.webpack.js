var context = require.context('./src', true, /[-_\.](test|spec)\.jsx?$/);
context.keys().forEach(context);
