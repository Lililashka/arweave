import { useState } from "react"
import SidebarMenu from "./SidebarMenu"
import OutsideClickHandler from 'react-outside-click-handler';

type Props = {
  toogleSidebarCallback(isOpen: boolean): void,
}

const Sidebar: React.FunctionComponent<Props> = ({
  toogleSidebarCallback
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  function onHamburgerIconClick() {
    setOpen(!isOpen)
    toogleSidebarCallback(!isOpen)
  }

  function onCloseClick() {
    setOpen(false)
    toogleSidebarCallback(false)
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`} >
      <nav>
        <button className={`hamburger-icon ${isOpen ? "open" : "closed"}`}
          onClick={onHamburgerIconClick} >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
      <div className={`sidebar__content-clone ${isOpen ? "open" : "closed"}`} />
      <div className={`sidebar__overlay ${isOpen ? "open" : "closed"}`} />

      <OutsideClickHandler
        onOutsideClick={() => {
          setTimeout(() => {
            if (isOpen) onCloseClick()
          }, 100)
        }}
      >
        <div className={`sidebar__content ${isOpen ? "open" : "closed"}`}>
          <div className="close-icon">
            <button onClick={onCloseClick}>
              <img src="/images/icons/close.svg" />
              <span>{" "}close</span>
            </button>
          </div>
          <div className='sidebar__content__inner'>
            <SidebarMenu closeSideBar={onCloseClick} />
          </div>
        </div>
      </OutsideClickHandler>
    </div >
  )
}

export default Sidebar