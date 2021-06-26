import styled from 'styled-components'

export const TodoList = styled.div`
  width: 50%;
  padding: 20px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  .title {
    padding-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  .input {
    display: flex;

    &-btn {
      margin-left: 20px;
    }
  }

  .list {
    padding-top: 20px;

    &-item-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50px;

      .completed {
        text-decoration: line-through;
      }
    }
  }
`

export const Item = styled.div`
  flex: 1;
  margin: 0 20px;
`
