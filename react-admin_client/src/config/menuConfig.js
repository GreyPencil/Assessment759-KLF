const menuList = [
  {
    title: 'Home', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: 'Product',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: 'Categories',
        key: '/category',
        icon: 'bars'
      },
      {
        title: 'Products',
        key: '/product',
        icon: 'tool'
      },
    ]
  },

  {
    title: 'Users',
    key: '/user',
    icon: 'user'
  },
  {
    title: 'Roles',
    key: '/role',
    icon: 'safety',
  },
  {
    title: 'Report',
    key: '/report',
    icon: 'file',
  },

  {
    title: 'Charts',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: 'Bar',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: 'Line',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: 'Pie',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    title: 'Contact Us',
    key: '/contact',
    icon: 'windows',
    isPublic: true,
  },
]

export default menuList