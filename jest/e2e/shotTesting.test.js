
/**********************快照***********************/
//移动应用程序的典型快照测试用例呈现UI组件，拍摄快照，然后将其与存储在测试旁边的参考快照文件进行比较。
//如果两个快照不匹配，测试将失败：更改是意外的，或者需要将参考快照更新为新版本的UI组件。
//用快照代是避免ui意外修改的，用于组件库比较好
//在其他快照测试中使用不同的道具渲染相同的组件不会影响第一个

import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});