


    /**********************作用域describe和生命周期钩子***********************/

    describe('Scoped / Nested block', () => {
        beforeAll(() => console.log('2 - beforeAll'));
        afterAll(() => console.log('2 - afterAll'));
        beforeEach(() => console.log('2 - beforeEach'));
        afterEach(() => console.log('2 - afterEach'));
        test('', () => console.log('2 - test'));
        //顺序：
        //   beforeAll
// beforeEach
// test
// afterAll
// afterEach
      });
      
