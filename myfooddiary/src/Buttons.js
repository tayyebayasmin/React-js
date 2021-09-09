import React, { useState } from 'react'
import MenuData from './MenuData'
import Cards from './Cards'

export default function Buttons() {
  const Category = MenuData.map((item) => item.category)
  const MyCategory = new Set(Category)
  const BtnsCategory = ['All', ...MyCategory]
  console.log(MyCategory)
  const [Menu, setMenu] = useState(MenuData)

  const showmenu = (btn) => {
    if (btn == 'All') {
      setMenu(MenuData)
    }
    else {
      const filter = MenuData.filter((menu) => menu.category==btn)
      setMenu(filter)
    }
  }
  return (
    <>
      <div className="buttons">
        {BtnsCategory.map((item, index) => <button onClick={()=>showmenu(item,index)}>{item}</button>)}
      </div>
      <div className='cards'>
        {Menu.map((item) => <Cards data={item} />)}
      </div>
    </>
  )

}

