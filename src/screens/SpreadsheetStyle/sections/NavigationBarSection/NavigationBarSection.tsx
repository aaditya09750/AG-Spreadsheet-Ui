import {
  BellIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NavigationBarSection = (): JSX.Element => {
  const breadcrumbItems = [
    { label: "Workspace", href: "#", active: false },
    { label: "Folder 2", href: "#", active: false },
    { label: "Spreadsheet 3", href: "#", active: true },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2 relative self-stretch w-full flex-[0_0_auto] z-[3] bg-white border-b [border-bottom-style:solid] border-[#eeeeee]">
      {/* Left side - Logo and breadcrumbs */}
      <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
        <img className="relative w-6 h-6" alt="Panel" src="/panel.svg" />

        <Breadcrumb>
          <BreadcrumbList className="inline-flex items-center gap-1">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <ChevronRightIcon className="w-3 h-3 text-[#afafaf]" />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    className={`font-paragraph-14-s-medium-14-20 text-${item.active ? "[#121212]" : "[#afafaf]"} text-[14px] leading-[20px] whitespace-nowrap`}
                  >
                    {item.label}
                    {item.active && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-6 h-6 p-0 ml-2"
                      >
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right side - SearchIcon, notifications and profile */}
      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
        {/* SearchIcon */}
        <div className="inline-flex items-center gap-2 p-3 relative flex-[0_0_auto] bg-[#f6f6f6] rounded-md overflow-hidden">
          <SearchIcon className="w-4 h-4 text-[#757575]" />
          <Input
            placeholder="Search within sheet"
            className="border-0 bg-transparent p-0 h-auto text-[12px] font-paragraph-12-XS-regular-12-16 text-[#757575] focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Notifications */}
        <div className="inline-flex items-center gap-3 p-2 relative flex-[0_0_auto] bg-white rounded-lg">
          <Button variant="ghost" size="icon" className="relative w-6 h-6 p-0">
            <BellIcon className="w-10 h-10" />
            <Badge className="flex items-center justify-center w-4 h-4 absolute top-0 left-4 bg-[#4b6a4f] text-[#f6f6f6] rounded-full border-2 border-solid border-white p-0">
              <span className="font-paragraph-10-XXS-medium-10-16 text-[8px]">
                2
              </span>
            </Badge>
          </Button>
        </div>

        {/* User profile */}
        <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 relative flex-[0_0_auto] bg-white rounded-lg">
          <Avatar className="w-8 h-8">
            <AvatarImage src="#" alt="User avatar" />
            <AvatarFallback className="font-semibold">AG</AvatarFallback>
          </Avatar>

          <div className="inline-flex flex-col max-w-[120px] items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-paragraph-12-XS-regular-12-16 text-[#121212] text-[12px] leading-[16px] whitespace-nowrap">
              Aaditya Gunjal
            </div>
            <div className="relative self-stretch -mt-0.5 font-label-10-XXS-regular text-[#757575] text-[10px] leading-[12px]">
              aadigunjal0975@gmail.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};