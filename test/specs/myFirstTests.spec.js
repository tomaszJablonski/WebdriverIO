
describe.skip('First Test', function () {

    it('Test1 in Mocha', async () => {

        browser.url('https://automationstepbystep.com/');
        browser.pause(2000);
        //await oznacza poczekam aż element sie pojawi
        await $('.list-box:nth-child(9) li:nth-child(4) > a').click();
        await $('.s').setValue('TypeScript');
        browser.keys('Enter');
        const elementTutorials = $('#postid-3138 > h2 > a');
        $(elementTutorials).isEqual('Free Online Tutorials');
        

    })

}) 