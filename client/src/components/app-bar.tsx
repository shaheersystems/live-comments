import { Button } from "../components/ui/button";
import { SunIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "../components/ui/avatar";

const AppBar = () => {
  return (
    <div className="flex p-4 justify-between">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 40 40"
        >
          <path
            fill="#F06225"
            d="M20 0c11.046 0 20 8.954 20 20v14a6 6 0 0 1-6 6H21v-8.774c0-2.002.122-4.076 1.172-5.78a10 10 0 0 1 6.904-4.627l.383-.062a.8.8 0 0 0 0-1.514l-.383-.062a10 10 0 0 1-8.257-8.257l-.062-.383a.8.8 0 0 0-1.514 0l-.062.383a9.999 9.999 0 0 1-4.627 6.904C12.85 18.878 10.776 19 8.774 19H.024C.547 8.419 9.29 0 20 0Z"
          ></path>
          <path
            fill="#F06225"
            d="M0 21h8.774c2.002 0 4.076.122 5.78 1.172a10.02 10.02 0 0 1 3.274 3.274C18.878 27.15 19 29.224 19 31.226V40H6a6 6 0 0 1-6-6V21ZM40 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          ></path>
        </svg>
      </div>
      <div className="flex gap-2 items-center">
        <Button size={"icon"} variant={"ghost"}>
          <SunIcon />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage
            className="h-8 w-8"
            src="https://api.dicebear.com/9.x/glass/svg"
            alt="avatar"
          ></AvatarImage>
        </Avatar>
      </div>
    </div>
  );
};

export default AppBar;
