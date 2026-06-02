import Hapi from '@hapi/hapi';

const port = 3000;

const init = async () => {
    const server = Hapi.server({
        port,
        host: '0.0.0.0',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => 'Hostman Cloud + Hapi on bun',
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
