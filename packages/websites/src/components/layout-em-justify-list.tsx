/**
 * @email: aric.zheng@alo7.com
 * @description: A React page component.
 * @created_at: 2024-04-28 21:08:01
 */

import styled from 'styled-components';


const Container = styled.div`
  border: 1px solid lightseagreen;
  width: 80%;
  margin: 10px auto 20px;

  .is-item {
    border: 4px solid lightgreen;
    padding: 10px;
  }

  .is-item h1 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #fff;
  }

  .is-item p {
    color: #333;
    font-size: 12px;
  }

  .is-item img {
    width: 100%;
  }

  .is-item:nth-child(2n) {
    background: salmon;
  }

  .is-item:nth-child(2n-1) {
    background: seagreen;
  }
`;

export default () => {
  return (
    <Container className="wp-8 debug-blue mx-auto rounded-lg overflow-hidden">
      <div className="layout-em-justify-list-2">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
      <hr className="my-2 border border-solid border-slate-500" />
      <div className="layout-em-justify-list-3">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
      <hr className="my-2 border border-solid border-slate-500" />
      <div className="layout-em-justify-list-4">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
      <hr className="my-2 border border-solid border-slate-500" />
      <div className="layout-em-justify-list-5">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
      <hr className="my-2 border border-solid border-slate-500" />
      <div className="layout-em-justify-list-6">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
      <hr className="my-2 border border-solid border-slate-500" />
      <div className="layout-em-justify-list-7">
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
        <div className="is-item">
          <img src="https://placeholder.qiniudn.com/80x80" alt="" />
          <h1>我是标题</h1>
          <p>我是描述</p>
        </div>
      </div>
    </Container>
  );
};
