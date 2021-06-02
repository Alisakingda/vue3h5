import {
  Field,
  Cell,
  CellGroup,
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Tabs,
  Tab,
  Swipe,
  SwipeItem
} from 'vant'

const componentList = [
  Field,
  Cell,
  CellGroup,
  Button,
  Icon,
  Tabbar,
  TabbarItem,
  NavBar,
  Tabs,
  Tab,
  Swipe,
  SwipeItem
]

export function registerVantComp(app) {
  componentList.forEach(comp => {
    app.use(comp)
  })
}
