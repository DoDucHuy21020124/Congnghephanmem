import React from "react"
import './ServiceBar.css'

const ServiceBar = () => {
  return (<>
    <div>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar">
        <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="public/images/icons/img-1.jpg" width="30px" alt="User Image" />
      
        </div>

        <ul class="app-menu">
          <li><a class="app-menu__item haha " ><i class='app-menu__icon bx bx-cart-alt'></i>
            <span class="app-menu__label">Create Notifications</span></a></li>
          <li><a class="app-menu__item  " ><i class='app-menu__icon bx bx-tachometer'></i><span
            class="app-menu__label ">All Notification</span></a></li>
          <li><a class="app-menu__item "><i class='app-menu__icon bx bx-id-card'></i>
            <span class="app-menu__label">Notification from producer </span></a></li>
          <li><a class="app-menu__item " ><i class='app-menu__icon bx bx-user-voice'></i><span
            class="app-menu__label">Notification from seller</span></a></li>
          <li><a class="app-menu__item " ><i class='app-menu__icon bx bx-purchase-tag-alt'></i><span
            class="app-menu__label">Notification from insurance </span></a></li>
        </ul>
      </aside>
    </div>
  </>)
}
export default ServiceBar