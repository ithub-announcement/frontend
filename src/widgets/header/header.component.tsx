import { FC } from "react";
import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import { VscAdd } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar fluid rounded className="w-full h-[60px] fixed z-50">
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Tooltip content="Написать пост" placement="bottom">
          <Button
            className="sm:w-full h-full text-center flex justify-center items-center leading-none"
            color="transparent"
            href="/editor"
          >
            <VscAdd />
          </Button>
        </Tooltip>
        {localStorage.getItem("access") && localStorage.getItem("refresh") ? (
          <Avatar
            size="md"
            placeholderInitials="0646"
            rounded
            className="select-none cursor-pointer *:text-xs"
          />
        ) : (
          <Button color="purple" onClick={() => navigate("/login")}>
            <span>Войти</span>
          </Button>
        )}
      </div>
      <Navbar.Collapse className="bg-white">
        <Navbar.Link className="cursor-pointer" onClick={() => navigate("/")}>
          <span>Главная</span>
        </Navbar.Link>
        <Navbar.Link
          className="cursor-pointer"
          onClick={() => navigate("/drafts")}
        >
          <span>Черновики</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
