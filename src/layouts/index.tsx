import { ProLayout } from '@ant-design/pro-components'
import { ConfigProvider } from 'antd'
import { useNavigate } from 'react-router-dom'

const Layouts = (props: any): React.ReactNode => {
  // const location = useRouteProps()
  const navigate = useNavigate()
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 13,
          controlHeight: 30,
          borderRadius: 0
        }
      }}
    >
      <ProLayout
        token={{
          pageContainer: {
            paddingBlockPageContainerContent: 10,
            paddingInlinePageContainerContent: 10
          }
        }}
        route={{
          path: '/',
          routes: [
            { path: '/home', name: '首页' },
            { path: '/about', name: '关于' },
            { path: '/setting', name: '设置' }
          ]
        }}
        title="羚州科技"
        // bgLayoutImgList={[
        //   {
        //     src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        //     left: 85,
        //     bottom: 100,
        //     height: '303px'
        //   },
        //   {
        //     src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        //     bottom: -68,
        //     right: -45,
        //     height: '303px'
        //   },
        //   {
        //     src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
        //     bottom: 0,
        //     left: 0,
        //     width: '331px'
        //   }
        // ]}
        appList={[
          {
            // icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            title: '主标题',
            desc: '描述'
          }
        ]}
        avatarProps={{
          //   src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '管理员'
        }}
        // onPageChange={(e): void => console.log(e)}
        fixSiderbar
        layout="top"
        splitMenus
        // location={{ pathname: location.path }}
        menuItemRender={(item: any, dom: any): React.ReactNode => (
          <div
            onClick={(): void => {
              navigate(item.path || '/')
            }}
          >
            {dom}
          </div>
        )}
      >
        {props.children}
      </ProLayout>
    </ConfigProvider>
  )
}

export default Layouts
