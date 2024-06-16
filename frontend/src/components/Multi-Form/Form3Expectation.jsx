// import {
//     Menu,
//     MenuHandler,
//     Button,
//     MenuList,
//     MenuItem,
//     Checkbox,
//   } from "@material-tailwind/react";
   
//   export function Expectation({handleChange}) {
//     return (
//       <Menu
//         dismiss={{
//           itemPress: false,
//         }}
//       >
//         <MenuHandler>
//           <Button>What are your expectations</Button>
//         </MenuHandler>
//         <MenuList>
//           <MenuItem className="p-0">
//             <label
//               htmlFor="item-1"
//               className="flex cursor-pointer items-center gap-2 p-2"
//             >
//               <Checkbox
//                 ripple={false}
//                 id="item-1"
//                 name="expectation1"
//                 containerProps={{ className: "p-0" }}
//                 className="hover:before:content-none"
//                 value={formData.theLittleThings.expectation1 || ""}
//                 onChange={handleChange}
//               />
//               I want to discover and connect with potential friends who live nearby.
//             </label>
//           </MenuItem>
//           <MenuItem className="p-0">
//             <label
//               htmlFor="item-2"
//               className="flex cursor-pointer items-center gap-2 p-2"
//             >
//               <Checkbox
//                 ripple={false}
//                 id="item-2"
//                 name="expectation2"
//                 containerProps={{ className: "p-0" }}
//                 className="hover:before:content-none"
//                 onChange={handleChange}
//               />
//               I want to find local events tailored to my interests.
//             </label>
//           </MenuItem>
//           <MenuItem className="p-0">
//             <label
//               htmlFor="item-3"
//               className="flex cursor-pointer items-center gap-2 p-2"
//             >
//               <Checkbox
//                 ripple={false}
//                 id="item-3"
//                 name="expectation3"
//                 containerProps={{ className: "p-0" }}
//                 className="hover:before:content-none"
//                 onChange={handleChange}
//               />
//               I want to find and join groups centered around my hobbies and interests
//             </label>
//           </MenuItem>
//           <MenuItem className="p-0">
//             <label
//               htmlFor="item-3"
//               className="flex cursor-pointer items-center gap-2 p-2"
//             >
//               <Checkbox
//                 ripple={false}
//                 id="item-3"
//                 name="expectation4"
//                 containerProps={{ className: "p-0" }}
//                 className="hover:before:content-none"
//                 onChange={handleChange}
//               />
//               I want an easy way to create and manage my events
//             </label>
//           </MenuItem>
//         </MenuList>
//       </Menu>
//     );
//   }

// import { Menu, MenuHandler, Button, MenuList, MenuItem, Checkbox } from "@material-tailwind/react";
// import React from "react";

// export function Expectation({ handleChange }) {
//   return (
//     <Menu dismiss={{ itemPress: false }}>
//       <MenuHandler>
//         <Button>What are your expectations</Button>
//       </MenuHandler>
//       <MenuList>
//         {["I want to discover and connect with potential friends who live nearby.",
//           "I want to find local events tailored to my interests.",
//           "I want to find and join groups centered around my hobbies and interests.",
//           "I want an easy way to create and manage my events"].map((expectation, index) => (
//           <MenuItem className="p-0" key={index}>
//             <label
//               htmlFor={`item-${index}`}
//               className="flex cursor-pointer items-center gap-2 p-2"
//             >
//               <Checkbox
//                 ripple={false}
//                 id={`item-${index}`}
//                 containerProps={{ className: "p-0" }}
//                 className="hover:before:content-none"
//                 onChange={handleChange}
//                 name={expectation}
//               />
//               {expectation}
//             </label>
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// }

import { Menu, MenuHandler, Button, MenuList, MenuItem, Checkbox } from "@material-tailwind/react";
import React from "react";

export function Expectation({ handleChange, formData }) {
  const expectations = [
    "I want to discover and connect with potential friends who live nearby.",
    "I want to find local events tailored to my interests.",
    "I want to find and join groups centered around my hobbies and interests.",
    "I want an easy way to create and manage my events",
  ];

  return (
    <Menu dismiss={{ itemPress: false }}>
      <MenuHandler>
        <Button>What are your expectations</Button>
      </MenuHandler>
      <MenuList>
        {expectations.map((expectation, index) => (
          <MenuItem className="p-0" key={index}>
            <label
              htmlFor={`item-${index}`}
              className="flex cursor-pointer items-center gap-2 p-2"
            >
              <Checkbox
                ripple={false}
                id={`item-${index}`}
                containerProps={{ className: "p-0" }}
                className="hover:before:content-none"
                onChange={handleChange}
                name={expectation}
                checked={formData.theLittleThings.expectation.includes(expectation)}
              />
              {expectation}
            </label>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
