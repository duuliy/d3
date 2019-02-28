const sum=require('./sum.js');


/**********************普通匹配器***********************/
test('1+2 equl 3',()=>{
    expect(sum(1,2)).toBe(3)  //toBe用于Object.is测试确切的相等性
})

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});  //检查对象的值用toEqual
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

/**********************Truthiness***********************/

  //toBeNull 只匹配 null
  //toBeUndefined 只匹配 undefined
  //toBeDefined与toBeUndefined相反
  //toBeTruthy任何匹配if语句为真
  //toBeFalsy任何匹配if语句为假
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });


  /**********************数字***********************/

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);  //  >
    expect(value).toBeGreaterThanOrEqual(3.5);  // >=
    expect(value).toBeLessThan(5);     //<
    expect(value).toBeLessThanOrEqual(4.5);   //  <=
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('两个浮点数字相加', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           这句会报错，因为浮点数有舍入误差
    expect(value).toBeCloseTo(0.3); // 这句可以运行
  });



    /**********************字符串***********************/
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      
    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });


    /**********************数组***********************/
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
      ];
      
    test('购物清单（shopping list）里面有啤酒（beer）', () => {
      expect(shoppingList).toContain('beer');
    });

/**********************抛出一个错误***********************/
    function compileAndroidCode() {
        throw new ConfigError('you are using the wrong JDK');
      }
      
      test('compiling android goes as expected', () => {
        expect(compileAndroidCode).toThrow();
        // expect(compileAndroidCode).toThrow(ConfigError);
      
        // You can also use the exact error message or a regexp
        // expect(compileAndroidCode).toThrow('you are using the wrong JDK');
        // expect(compileAndroidCode).toThrow(/JDK/);
      });