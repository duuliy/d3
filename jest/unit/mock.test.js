const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());


// 这个 mock 函数至少被调用一次
expect(mockFunc).toBeCalled();

// 这个 mock 函数至少被调用一次，而且传入了特定参数
expect(mockFunc).toBeCalledWith(arg1, arg2);

// 这个 mock 函数的最后一次调用传入了特定参数
expect(mockFunc).lastCalledWith(arg1, arg2);

// 所有的 mock 的调用和名称都被写入了快照
expect(mockFunc).toMatchSnapshot();