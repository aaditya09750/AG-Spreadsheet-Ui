import {
  Bell,
  MoreHorizontal,
  Search,
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
    <header className="flex items-center justify-between px-4 py-2 relative self-stretch w-full flex-[0_0_auto] bg-white border-b border-[#e5e7eb] h-12">
      {/* Left side - Logo and breadcrumbs */}
      <div className="inline-flex items-center justify-center gap-3 relative flex-[0_0_auto]">
        <div className="relative flex items-center justify-center w-5 h-4">
          <img 
            className="w-5 h-4" 
            alt="Workspace" 
            src="/Shape.png"
            style={{
              filter: 'brightness(0) saturate(100%) invert(42%) sepia(12%) saturate(1234%) hue-rotate(85deg) brightness(95%) contrast(89%)'
            }}
          />
        </div>

        <Breadcrumb>
          <BreadcrumbList className="inline-flex items-center gap-1">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <img 
                      src="/Chevron Double.png" 
                      alt="separator" 
                      className="w-3 h-3"
                      style={{
                        filter: 'brightness(0) saturate(100%) invert(69%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(94%) contrast(86%)'
                      }}
                    />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    className={`text-sm font-medium ${item.active ? "text-[#111827]" : "text-[#9ca3af]"} whitespace-nowrap`}
                  >
                    {item.label}
                    {item.active && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-5 h-5 p-0 ml-1"
                      >
                        <MoreHorizontal className="w-4 h-4 stroke-[1.5] text-[#6b7280]" />
                      </Button>
                    )}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Right side - Search, notifications and profile */}
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        {/* Search */}
        <div className="inline-flex items-center gap-2 px-3 py-2 relative flex-[0_0_auto] bg-[#f9fafb] rounded-md">
          <Search className="w-4 h-4 text-[#9ca3af] stroke-[1.5]" />
          <Input
            placeholder="Search within sheet"
            className="border-0 bg-transparent p-0 h-auto text-sm text-[#9ca3af] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#9ca3af]"
          />
        </div>

        {/* Notifications */}
        <div className="inline-flex items-center gap-3 p-2 relative flex-[0_0_auto] bg-white rounded-lg">
          <Button variant="ghost" size="icon" className="relative w-6 h-6 p-0">
            <Bell className="w-5 h-5 stroke-[1.5] text-[#6b7280]" />
            <Badge className="flex items-center justify-center w-4 h-4 absolute -top-1 -right-1 bg-[#4b6a4f] text-white rounded-full border-2 border-solid border-white p-0 text-[8px] font-medium">
              2
            </Badge>
          </Button>
        </div>

        {/* User profile */}
        <div className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 relative flex-[0_0_auto] bg-white rounded-lg">
          <Avatar className="w-8 h-8">
            <AvatarImage src="#" alt="User avatar" />
            <AvatarFallback className="font-semibold text-sm bg-[#f3f4f6] text-[#374151]">JD</AvatarFallback>
          </Avatar>

          <div className="inline-flex flex-col max-w-[120px] items-start relative flex-[0_0_auto]">
            <div className="relative w-fit text-sm font-medium text-[#111827] whitespace-nowrap">
              John Doe
            </div>
            <div className="relative self-stretch text-xs text-[#9ca3af] leading-tight">
              john.doe...
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};