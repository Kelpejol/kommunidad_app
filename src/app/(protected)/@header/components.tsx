// "use client";

// import Link from "next/link";

// import { useState, MouseEvent } from "react";

// import { SquareMenu } from "lucide-react";

// import Fade from "@mui/material/Fade";
// import Menu from "@mui/material/Menu";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";

// import { Route } from "./types";

// import { routes } from "../dashboard/@sideBar/props";
// import { SectionProps, RouteProps } from "../dashboard/@sideBar/types";

// export function MobileMenu() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const open = Boolean(anchorEl);
  
//   function handleClick(event: MouseEvent<HTMLElement>) {
//     setAnchorEl(event.currentTarget);
//   };

//   function handleClose() {
//     setAnchorEl(null);
//   };

//   function regularizeRoutes(routeSection: any[]): any[] {
//   	return routeSection.reduce((accumulator, current) => {
//   		const { title, routes } = current;

//   		return [
//   			...accumulator,
//   			...routes
//   		];
//   	}, []);
//   }

//   return (
//     <div>
//       <button
//       	type="button"
//       	id="fade-button"
//         aria-haspopup="true"
//         onClick={handleClick}
//         aria-expanded={open ? "true" : undefined}
//         aria-controls={open ? "fade-menu" : undefined}
//       	className="p-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100"
//       >
// 				<div className="flex-none">
// 					<SquareMenu size={20} className="text-black" />
// 				</div>
// 				<div className="flex-1">
// 					<span className="text-black capitalize font-semibold fill-gray-200">menu</span>
// 				</div>
// 			</button>
//       <Menu
//         id="fade-menu"
//         MenuListProps={{
//           "aria-labelledby": "fade-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//       >
//       	{regularizeRoutes(routes).map(({ name, href, Icon }: Route, index: number) => (
// 	        <MenuItem key={index} onClick={handleClose}>
// 	        	<Link href={href} className="py-3 inline-flex gap-3 items-center rounded-lg hover:bg-gray-100">
// 		        	<div className="flex-none">
// 								<Icon size={20} className="text-black" />
// 							</div>
// 							<div className="flex-1">
// 								<span className="text-black capitalize font-semibold fill-gray-200">
// 									{name}
// 								</span>
// 							</div>
// 	        	</Link>
// 	        </MenuItem>
//       	))}
//       </Menu>
//     </div>
//   );
// }
"use client";

import Link from "next/link";

import { useRef, useState, Fragment } from "react";
import { ScanFace, SquareMenu, MonitorDot } from "lucide-react";

import { Route, MobileMenuProps } from "./types";

import { routes } from "../dashboard/@sideBar/props";

export function MobileMenu() {
  const mobileRoutes = routes.reduce((accumulator: Route[], { routes }: any) => {
    return [
      ...accumulator,
      ...routes
    ]
  }, []);

  return (
    <details className="relative">
      <summary className="rounded-lg inline-block cursor-pointer hover:bg-gray-100">
        <button disabled type="button" className="p-3 pointer-events-none inline-flex gap-3 items-center rounded-lg">
          <div className="flex-none">
            <SquareMenu size={20} className="text-black" />
          </div>
          <div className="flex-1">
            <span className="text-black capitalize font-semibold fill-gray-200">menu</span>
          </div>
        </button>
      </summary>
      <nav className="min-w-[250px] border bg-white top-full right-0 absolute rounded-lg">
        <div className="py-5 divide-y">
          {mobileRoutes.map(({ href, name, Icon }: Route, index: number) => (
            <Fragment key={index}>
              <Link href={href} className="py-5 px-5 flex w-full gap-3 text-left items-center hover:bg-gray-100">
                <div className="flex-none">
                  <Icon size={20} className="text-black" />
                </div>
                <div className="flex-1">
                  <span className="text-black capitalize font-semibold fill-gray-200">
                    {name}
                  </span>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </nav>
    </details>
  );
}