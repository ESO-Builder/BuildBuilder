var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;


module.exports = {'ip': ip_address, 'port':port};