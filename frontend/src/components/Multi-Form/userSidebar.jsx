
// import React from 'react';
// import { HomeIcon, StarIcon, PlusIcon } from '@heroicons/react/24/outline';

// export default function UserSidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div>
//       <div
//         className={`fixed inset-0 z-30 transition-opacity bg-black ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
//         onClick={toggleSidebar}
//       />
//       <div
//         className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}
//       >
//         <div className="px-4 py-6">
//           <nav className="space-y-1">
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <HomeIcon className="h-6 w-6 text-gray-500" />
//               <span className="text-sm font-medium text-gray-900">Home</span>
//             </a>
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <StarIcon className="h-6 w-6 text-gray-500" />
//               <span className="text-sm font-medium text-gray-900">Popular</span>
//             </a>
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <PlusIcon className="h-6 w-6 text-gray-500" />
//               <span className="text-sm font-medium text-gray-900">Create a custom feed</span>
//             </a>
//           </nav>
//         </div>
//         <div className="px-4 py-6">
//           <h2 className="text-xs font-semibold text-gray-500 uppercase">Recent</h2>
//           <nav className="mt-4 space-y-1">
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <span className="h-4 w-4 bg-red-500 rounded-full"></span>
//               <span className="text-sm font-medium text-gray-900">r/Justfuckmyshitup</span>
//             </a>
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
//               <span className="text-sm font-medium text-gray-900">r/dating</span>
//             </a>
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <span className="h-4 w-4 bg-green-500 rounded-full"></span>
//               <span className="text-sm font-medium text-gray-900">r/AppHookup</span>
//             </a>
//             <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
//               <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
//               <span className="text-sm font-medium text-gray-900">r/cscareerquestions</span>
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }
/////////////////////

import React from 'react';
import { HomeIcon, StarIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function UserSidebar({ isOpen, toggleSidebar }) {
  return (
    <div>
      <div
        className={`fixed inset-0 z-30 transition-opacity bg-black ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}
      >
        <div className="px-4 py-6">
          <nav className="space-y-1">
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <HomeIcon className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <StarIcon className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">Popular</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <PlusIcon className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-900">Create a custom feed</span>
            </a>
          </nav>
        </div>
        <div className="px-4 py-6">
          <h2 className="text-xs font-semibold text-gray-500 uppercase">Recent</h2>
          <nav className="mt-4 space-y-1">
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <span className="h-4 w-4 bg-red-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900">r/Justfuckmyshitup</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <span className="h-4 w-4 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900">r/dating</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <span className="h-4 w-4 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900">r/AppHookup</span>
            </a>
            <a href="#" className="flex items-center space-x-2 py-2 px-4 rounded hover:bg-gray-100">
              <span className="h-4 w-4 bg-yellow-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900">r/cscareerquestions</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
