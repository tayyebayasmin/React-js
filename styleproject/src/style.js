import React from 'react'
import styles from './styles.module.css';
import styled from 'styled-components';

export default function Style(){
const TodoComponent = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  width: 800px;
  min-height: 300px;
  margin: 30px auto;
  box-sizing: border-box;`

  const Button=styled.button`
  padding:10px;
  font-family: cooper;
  font-size:30px ;
  
  `
    return (
        <TodoComponent>
                 <Button className='btn btn-primary'>hello</Button>
                 <h1 >CSS MODULES</h1>
                 <h2 className={styles["heading"]}>import styles from './styles.module.css';</h2>
                 <p>$ npm install --save styled-components</p>
        </TodoComponent>
    )
}
