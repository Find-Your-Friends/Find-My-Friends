
// import React from 'react';
// import { ChevronDownIcon, BellIcon, Bars3Icon } from '@heroicons/react/24/outline';
// import { Avatar, Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

// export default function UserNavbar({ toggleSidebar }) {
//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <button onClick={toggleSidebar} className="md:hidden">
//             <Bars3Icon className="h-6 w-6 text-gray-500" />
//           </button>
//           <img src="https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" alt="Reddit Logo" className="h-8 w-8 hidden md:block"/>
//           <input 
//             type="text" 
//             placeholder="Search in r/cscareerquestions" 
//             className="border rounded-full px-4 py-1 text-sm hidden md:block"
//           />
//         </div>
//         <div className="flex items-center space-x-4">
//           <BellIcon className="h-6 w-6 text-gray-500" />
//           <Menu>
//             <MenuHandler>
//               <Button
//                 variant="text"
//                 color="blue-gray"
//                 className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
//               >
//                 <Avatar
//                   variant="circular"
//                   size="sm"
//                   alt="user avatar"
//                   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//                   className="border border-gray-900 p-0.5"
//                 />
//                 <ChevronDownIcon
//                   strokeWidth={2.5}
//                   className={`h-3 w-3 transition-transform`}
//                 />
//               </Button>
//             </MenuHandler>
//             <MenuList className="p-1">
//               <MenuItem>My Profile</MenuItem>
//               <MenuItem>Edit Profile</MenuItem>
//               <MenuItem>Inbox</MenuItem>
//               <MenuItem>Help</MenuItem>
//               <MenuItem className="text-red-500">Sign Out</MenuItem>
//             </MenuList>
//           </Menu>
//         </div>
//       </div>
//     </div>
//   );
// }
///////////////////////


import React from 'react';
import { ChevronDownIcon, BellIcon, Bars3Icon, InboxIcon, PlusIcon} from '@heroicons/react/24/outline';
import { Avatar, Menu, MenuHandler, MenuList, MenuItem, Button, Input } from "@material-tailwind/react";
import { useNavigate, useParams, Navigate, Link } from "react-router-dom";

export default function UserNavbar({ toggleSidebar, handleLogout }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar} className="md:hidden">
            <Bars3Icon className="h-6 w-6 text-gray-500" />
          </button>
          <img src="https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" alt="Reddit Logo" className="h-8 w-8 hidden md:block"/>
        </div>
        {/* <Input 
          type="text" 
          placeholder="Search in r/cscareerquestions" 
          className="border rounded-full px-4 py-1 text-sm hidden md:block"
        /> */}
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-gray-500" />
          <Link to="/Post">
            <PlusIcon className="h-6 w-6 text-gray-500" />
          </Link>
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="user avatar"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  className="border border-gray-900 p-0.5"
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="p-1">
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Edit Profile</MenuItem>
              <MenuItem>Inbox</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem className="text-red-500" onClick={handleLogout}>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}