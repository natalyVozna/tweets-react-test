import {
  ContainerSelect,
  DropdownBox,
  MenuContainer,
  OptionItem,
} from "./Select.styled";
import { ReactComponent as Arrow } from "../../assets/svg/arrow-dropdown.svg";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Select = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFollowing = searchParams.get("isFollowing") ?? "";
  const [currentFilter, setCurrentFilter] = useState("show all");
  const [showMenu, setShowMenu] = useState(false);

  const dataList = [
    { name: "show all", value: "all" },
    { name: "follow", value: "false" },
    { name: "followings", value: "true" },
  ];

  useEffect(() => {
    dataList.forEach((el) =>
      el.value === isFollowing ? setCurrentFilter(el.name) : "show all"
    );
  }, [isFollowing]);

  const toggleMenu = (e) => {
    e.preventDefault();

    setShowMenu(!showMenu);
  };

  const handleClickOption = (e, name, value) => {
    e.preventDefault();
    setCurrentFilter(name);
    setSearchParams({ isFollowing: value, page: 1 });
    setShowMenu(!showMenu);
  };

  return (
    <ContainerSelect>
      <p>{currentFilter}</p>
      <DropdownBox
        type="button"
        onClick={toggleMenu}
        rotate={showMenu ? "rotate" : "none"}
      >
        <Arrow />
      </DropdownBox>

      {showMenu && (
        <MenuContainer>
          {dataList.map(({ name, value }, index) => (
            <OptionItem
              type="button"
              key={index}
              onClick={(e) => handleClickOption(e, name, value)}
            >
              {name}
            </OptionItem>
          ))}
        </MenuContainer>
      )}
    </ContainerSelect>
  );
};

export default Select;
