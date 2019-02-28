/**********************异步done***********************/

// Don't do this!
test('the data is peanut butter', () => {
    function callback(data) {
      expect(data).toBe('peanut butter');
    }
  
    fetchData(callback);
  });
  

//使用单个参数调用 done，而不是将测试放在一个空参数的函数。 Jest会等done回调函数执行结束后，结束测试。
//如果 done()永远不会调用，这个测试将失败.
  test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
  
    fetchData(callback);
  });

/**********************promise***********************/
  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });


  test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
  });

  /**********************Async/Await***********************/

  test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toThrow('error');
  });