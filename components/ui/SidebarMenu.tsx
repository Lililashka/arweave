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
    label: 'Grants and investments',
    nodes: [],
    url: '/get-involved/grants-funding'
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

const SidebarMenu: React.FunctionComponent = () => {

  return (
    <div className="sidebar-menu">
      <SidebarMenuSection name="Learn" treeData={learnTreeData} />
      <SidebarMenuSection name="Get Involved" treeData={getInvolvedTreeData} />
      <SidebarMenuSection name="Build" treeData={buildTreeData} />
      <SidebarMenuSection name="Mine" treeData={mineTreeData} />
    </div>
  )
}

export default SidebarMenu;