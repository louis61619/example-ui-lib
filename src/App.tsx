import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/button/Button'
import Menu from './components/menu/Menu'
import MenuItem from './components/menu/MenuItem'
import SubMenu from './components/menu/Submenu'
import Icon from './components/icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
      <Icon icon="arrow-down" theme="danger" size="10x" />

      <Menu
        onSelect={(index) => {
          // console.log(index)
        }}
        mode="vertical"
        defaultIndex="subMenu-acitve"
      >
        <MenuItem index="acitve">active</MenuItem>
        <MenuItem index="disabled">disabled</MenuItem>
        <MenuItem index="default">default</MenuItem>
        <SubMenu title="subMenu" index="subMenu">
          <MenuItem index="subMenu-acitve">active</MenuItem>
          <MenuItem index="subMenu-disabled">disabled</MenuItem>
          <MenuItem index="subMenu-default">default</MenuItem>
        </SubMenu>
      </Menu>

      {/* button */}
      <Button autoFocus size={ButtonSize.large} btnType={ButtonType.primary}>
        我是按鈕
      </Button>
      <Button size={ButtonSize.small} btnType={ButtonType.link}>
        我是連結
      </Button>
      <Button size={ButtonSize.small} btnType={ButtonType.primary} disabled>
        我是連結
      </Button>
      <Button size={ButtonSize.large} btnType={ButtonType.danger}>
        我是連結
      </Button>
      <Button size={ButtonSize.large} btnType={ButtonType.default}>
        我是連結
      </Button>
      <Button size={ButtonSize.large} btnType={ButtonType.link}>
        我是連結
      </Button>
      <Button size={ButtonSize.large} btnType={ButtonType.link} disabled>
        我是連結
      </Button>
    </div>
  )
}

export default App
