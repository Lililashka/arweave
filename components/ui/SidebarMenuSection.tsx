import * as React from "react"
import TreeMenu, { TreeNodeInArray, ItemComponent } from 'react-simple-tree-menu';
import Router from 'next/router'

type Props = {
  name: string,
  treeData: TreeNodeInArray[],
}

function getPath(): string | undefined {
  if (typeof window === 'undefined') return undefined
  return window.location.pathname
}

function findActiveKey(path: string | undefined, nodes: TreeNodeInArray[] | undefined): string | undefined {
  if (!path) return undefined;
  if (!nodes) return undefined;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    const { key, url, nodes: subNodes } = node

    if (url === path) return key
    if (subNodes) {
      const subKey = findActiveKey(path, subNodes)
      if (subKey) return `${key}/${subKey}`
    }
  }

  return undefined
}

function checkAbsoluteUrl(urlStr: string) {
  const pat = /^https?:\/\//i;
  return pat.test(urlStr);
}

const SidebarMenuSection: React.FunctionComponent<Props> = ({
  name = "Menu Section",
  treeData = []
}) => {
  const [isReady, setIsReady] = React.useState()

  React.useEffect(() => {
    setIsReady(true)
  }, []);

  if (!isReady) return null

  const routePath = getPath()
  const activeKey = findActiveKey(routePath, treeData)
  const openNodes = activeKey ? [activeKey.substring(0, activeKey.lastIndexOf("/")), activeKey] : []

  return (
    <div className="menu-section">
      <h5>{name}</h5>
      <div className="tree-menu__container">
        <TreeMenu data={treeData}
          initialActiveKey={activeKey}
          initialOpenNodes={openNodes}
          hasSearch={false}
          disableKeyboard={false}
          onClickItem={({ url }) => {
            if (!url) return
            if (checkAbsoluteUrl(url)) window.location.href = url;
            else Router.push(url);
          }} >
          {({ items }) => (
            <ul className="rstm-tree-item-group">
              {items.map(props => {
                const { key, hasNodes, toggleNode, onClick, isNew } = props
                const headerClassName = hasNodes ? "header" : ""
                const newClassName = isNew ? "new" : ""

                return (
                  <div key={key} className={`tree-item-container ${headerClassName} ${newClassName}`}>
                    <ItemComponent key={key} {...props} onClick={(evt) => {
                      if (toggleNode) { toggleNode() }
                      else { onClick(evt) }
                    }} />
                  </div>
                )
              })}
            </ul>
          )}
        </TreeMenu>
      </div>
    </div>
  )
}

export default SidebarMenuSection