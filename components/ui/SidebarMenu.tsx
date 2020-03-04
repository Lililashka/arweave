import *  as React from "react"
import SidebarMenuSection from "./SidebarMenuSection"

const learnTreeData = [
  {
    key: 'intro',
    label: 'What is Arweave?',
    nodes: [],
    url: '/'
  },
  {
    key: 'technology',
    label: 'Technology',
    nodes: [
      {
        key: 'storage-endowment',
        label: 'Storage Endowment',
        nodes: [],
        url: '/technology'
      },
      {
        key: 'permaweb',
        label: 'Permaweb',
        nodes: [],
        url: '/technology#permaweb'
      },
      {
        key: 'content-moderation',
        label: 'Content Moderation',
        nodes: [],
        url: '/technology#content-moderation'
      },
      {
        key: 'papers',
        label: 'Papers',
        nodes: [],
        url: '/technology#papers'
      }
    ]
  }
];

const getInvolvedTreeData = [
  {
    key: 'community',
    label: 'Community',
    nodes: [],
    url: '/get-involved/community'
  },
  {
    key: 'grants-and-investments',
    label: 'Grants and funding',
    nodes: [],
    url: '/get-involved/grants-funding'
  },
  {
    key: 'boost',
    label: 'Arweave Boost',
    nodes: [],
    url: 'https://boost.arweave.org/'
  }
];

const buildTreeData = [
  {
    key: 'start',
    label: 'Start',
    nodes: [],
    url: '/build'
  },
  {
    key: 'interfaces',
    label: 'Interfaces',
    nodes: [],
    url: '/build#interfaces'
  },
  {
    key: 'resources',
    label: 'Resources',
    nodes: [],
    url: '/build#resources'
  }
];

const mineTreeData = [
  {
    key: 'start',
    label: 'Start',
    nodes: [],
    url: '/mine/start'
  },
  {
    key: 'optimise',
    label: 'Optimise',
    nodes: [],
    url: '/mine/optimise'
  },
  {
    key: 'learn-more',
    label: 'Learn more',
    nodes: [],
    url: '/mine/learn-more'
  }
];

type Props = {
  closeSideBar(): void,
}

const SidebarMenu: React.FunctionComponent<Props> = ({
  closeSideBar
}) => {

  return (
    <div className="sidebar-menu">
      <SidebarMenuSection name="Learn" treeData={learnTreeData} closeSideBar={closeSideBar} />
      <SidebarMenuSection name="Get Involved" treeData={getInvolvedTreeData} closeSideBar={closeSideBar} />
      <SidebarMenuSection name="Build" treeData={buildTreeData} closeSideBar={closeSideBar} />
      <SidebarMenuSection name="Mine" treeData={mineTreeData} closeSideBar={closeSideBar} />
    </div>
  )
}

export default SidebarMenu;