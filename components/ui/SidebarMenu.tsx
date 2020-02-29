import *  as React from "react"
import SidebarMenuSection from "./SidebarMenuSection"

const learnTreeData = [
  {
    key: 'learn',
    label: 'What is Arweave?',
    nodes: []  
  },
  {
    key: 'learn',
    label: 'Technology',
    nodes: [
      {
        key: 'learn-tech-sub1',
        label: 'Storage Endowment',
        nodes: [],
        url: 'https://google.com'
      },
      {
        key: 'learn-tech-sub2',
        label: 'Permaweb',
        nodes: [],
        url: 'https://google.com'
      },
      {
        key: 'learn-tech-sub3',
        label: 'Content Moderation',
        nodes: [],
        url: 'https://google.com'
      },
      {
        key: 'learn-tech-sub4',
        label: 'Papers',
        nodes: [],
        url: 'https://google.com'
      },
    ]
  },
];

const getInvolvedTreeData = [
  {
    key: 'getInvolved',
    label: 'Community',
    nodes: []
  },
  {
    key: 'getInvolved',
    label: 'Grants and investments',
    nodes: []
  }
];

const buildTreeData = [
  {
    key: 'build',
    label: 'Start',
    class: 'primary',
    nodes: []
  },
  {
    key: 'build',
    label: 'Interfaces',
    nodes: []
  },
  {
    key: 'build',
    label: 'Resources',
    isNew: true,
    url: '/blog'
  }
];

const mineTreeData = [
  {
    key: 'mine',
    label: 'Start',
    nodes: []
  },
  {
    key: 'mine',
    label: 'Optimise',
    nodes: []
  },
  {
    key: 'mine',
    label: 'Learn more',
    nodes: []
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