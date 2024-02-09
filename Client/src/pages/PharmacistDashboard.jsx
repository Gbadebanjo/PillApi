import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Pillfindr from "../assets/Pillfindr3.png";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  background-color: #008080;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  width: 15%;
  background-color: #f2f2f2;
  margin: 70px 0px 50px 100px;
  border-radius: 10px;
`;

const Logo = styled.img`
  width: 70%;
  height: auto;
`;

const NameHeading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 20px;
  padding-buttom: 0px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 10px;
  height: 50px;
  margin: 5px;
  transition: background-color 0.3s ease;
  color: #212121;

  &.active {
    background-color: #008080;
  }

  &:hover {
    background-color: #008080;
    cursor: pointer;
    color: #ffffff;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 10px 0px 20px 10px;
  gap: 10px;
`;

const MenuText = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
`;

const Line = styled.hr`
  height: 3px;
  border: none;
  background-color: #d9d9d9;
`;

const CountContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #f79494;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120vh;
  width: 60%;
  background-color: #ffffff;
  margin: 70px 0px 50px 40px;
  border-radius: 10px;
`;

const RightTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 15%;
  width: 100%;
  justify-content: space-between;
  // background-color: red;
`;

const SearchWrapper = styled.div`
  position: relative;
  // background-color: #242424;
  height: 120px;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  border: none;
  padding: 20px;
  margin: 60px;
  font-size: 18px;
  font-weight: 400;
  font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
  background-color: #c9c9c9;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 20%;
  top: 60%;

  @media (max-width: 1408px) {
    display: none;
  }
`;

const IconTag = styled.div`
  width: 52px;
  height: 32px;
  display: flex;
  background-color: #ffffff;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const CountContainer1 = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  // margin-t: 5px;
  background-color: #f79494;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: absolute;
`;

const ProfileContainer = styled.div`
width: 250px;
height: 200px;
display: grid;
`;

const ProfileImage = styled.img`


const PharmacistDashboard = () => {
  const [updateCount, setUpdateCount] = useState(0);
  return (
    <Container>
      <LeftContainer>
        <Logo src={Pillfindr} alt="Pillfindr" />
        <NameHeading>ACCOUNT</NameHeading>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-dashboard-fill" clip-path="url(#clip0_1245_4761)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M3.5 13H11.5V3H3.5V13ZM3.5 21H11.5V15H3.5V21ZM13.5 21H21.5V11H13.5V21ZM13.5 3V9H21.5V3H13.5Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4761">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Dashboard</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-notification-2-fill" clip-path="url(#clip0_1278_5392)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1278_5392">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Updates</MenuText>
            <CountContainer>{updateCount}</CountContainer>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-secure-payment-line" clip-path="url(#clip0_1245_4729)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M11 2L18.298 4.28C18.5015 4.34354 18.6794 4.47048 18.8057 4.64229C18.932 4.81409 19.0001 5.02177 19 5.235V7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V16C22 16.2652 21.8946 16.5196 21.7071 16.7071C21.5196 16.8946 21.2652 17 21 17L17.78 17.001C17.393 17.511 16.923 17.961 16.38 18.331L11 22L5.62 18.332C4.81252 17.7815 4.15175 17.042 3.69514 16.1779C3.23853 15.3138 2.9999 14.3513 3 13.374V5.235C3.00012 5.02194 3.06829 4.81449 3.19456 4.64289C3.32084 4.47128 3.49862 4.34449 3.702 4.281L11 2ZM11 4.094L5 5.97V13.374C4.99986 13.9862 5.14025 14.5903 5.41036 15.1397C5.68048 15.6892 6.07311 16.1692 6.558 16.543L6.747 16.679L11 19.58L14.782 17H10C9.73478 17 9.48043 16.8946 9.29289 16.7071C9.10536 16.5196 9 16.2652 9 16V8C9 7.73478 9.10536 7.48043 9.29289 7.29289C9.48043 7.10536 9.73478 7 10 7H17V5.97L11 4.094ZM11 12V15H20V12H11ZM11 10H20V9H11V10Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4729">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Payment</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-handbag-fill" clip-path="url(#clip0_1245_4733)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M12.0001 2C13.8566 2 15.6371 2.7375 16.9498 4.05025C18.2626 5.36301 19.0001 7.14348 19.0001 9H20.0741C20.326 9.00001 20.5686 9.09507 20.7534 9.26618C20.9382 9.4373 21.0517 9.67187 21.0711 9.923L21.9171 20.923C21.9375 21.1874 21.852 21.4491 21.6795 21.6505C21.507 21.8519 21.2615 21.9766 20.9971 21.997L20.9201 22H3.08008C2.81486 22 2.56051 21.8946 2.37297 21.7071C2.18544 21.5196 2.08008 21.2652 2.08008 21L2.08308 20.923L2.92908 9.923C2.94847 9.67187 3.06193 9.4373 3.24676 9.26618C3.43159 9.09507 3.6742 9.00001 3.92608 9H5.00008C5.00008 7.14348 5.73758 5.36301 7.05033 4.05025C8.36309 2.7375 10.1436 2 12.0001 2ZM14.0001 13H10.0001V15H14.0001V13ZM12.0001 4C10.7116 4.00007 9.47292 4.49754 8.5423 5.38866C7.61169 6.27978 7.061 7.49575 7.00508 8.783L7.00008 9H17.0001C17 7.71154 16.5025 6.47284 15.6114 5.54222C14.7203 4.61161 13.5043 4.06092 12.2171 4.005L12.0001 4Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4733">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>My Order</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-list-settings-fill" clip-path="url(#clip0_1245_4737)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M2 18H9V20H2V18ZM2 11H11V13H2V11ZM2 4H22V6H2V4ZM20.674 13.025L21.83 12.634L22.83 14.366L21.914 15.171C22.0293 15.7177 22.0293 16.2823 21.914 16.829L22.83 17.634L21.83 19.366L20.674 18.975C20.264 19.345 19.776 19.63 19.239 19.805L19 21H17L16.76 19.804C16.2293 19.6306 15.7408 19.3478 15.326 18.974L14.17 19.366L13.17 17.634L14.086 16.829C13.9707 16.2823 13.9707 15.7177 14.086 15.171L13.17 14.366L14.17 12.634L15.326 13.025C15.736 12.655 16.224 12.37 16.761 12.195L17 11H19L19.24 12.196C19.776 12.37 20.264 12.656 20.674 13.026V13.025ZM18 17C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15C17.7348 15 17.4804 15.1054 17.2929 15.2929C17.1054 15.4804 17 15.7348 17 16C17 16.2652 17.1054 16.5196 17.2929 16.7071C17.4804 16.8946 17.7348 17 18 17Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4737">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Settings</MenuText>
          </MenuContainer>
        </StyledNavLink>

        <Line />
        <NameHeading>PRODUCT</NameHeading>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-add-circle-fill" clip-path="url(#clip0_1245_4745)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4745">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Add new</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-stethoscope-line" clip-path="url(#clip0_1245_4749)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M8 3V5H6V9C6 11.21 7.79 13 10 13C12.21 13 14 11.21 14 9V5H12V3H15C15.552 3 16 3.448 16 4V9C16 11.973 13.838 14.44 11 14.917V16.5C11 18.433 12.567 20 14.5 20C15.997 20 17.275 19.06 17.775 17.737C16.728 17.27 16 16.22 16 15C16 13.343 17.343 12 19 12C20.657 12 22 13.343 22 15C22 16.371 21.08 17.527 19.824 17.885C19.21 20.252 17.059 22 14.5 22C11.462 22 9 19.538 9 16.5V14.917C6.162 14.441 4 11.973 4 9V4C4 3.448 4.448 3 5 3H8ZM19 14C18.448 14 18 14.448 18 15C18 15.552 18.448 16 19 16C19.552 16 20 15.552 20 15C20 14.448 19.552 14 19 14Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4749">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>My Products</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <Line />
        <NameHeading>ADMIN</NameHeading>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-settings-2-fill" clip-path="url(#clip0_1245_4757)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M8.68588 3.99988L11.2929 1.39288C11.4804 1.20541 11.7347 1.1001 11.9999 1.1001C12.265 1.1001 12.5194 1.20541 12.7069 1.39288L15.3139 3.99988H18.9999C19.2651 3.99988 19.5195 4.10524 19.707 4.29278C19.8945 4.48031 19.9999 4.73467 19.9999 4.99988V8.68588L22.6069 11.2929C22.7944 11.4804 22.8997 11.7347 22.8997 11.9999C22.8997 12.265 22.7944 12.5194 22.6069 12.7069L19.9999 15.3139V18.9999C19.9999 19.2651 19.8945 19.5195 19.707 19.707C19.5195 19.8945 19.2651 19.9999 18.9999 19.9999H15.3139L12.7069 22.6069C12.5194 22.7944 12.265 22.8997 11.9999 22.8997C11.7347 22.8997 11.4804 22.7944 11.2929 22.6069L8.68588 19.9999H4.99988C4.73467 19.9999 4.48031 19.8945 4.29278 19.707C4.10524 19.5195 3.99988 19.2651 3.99988 18.9999V15.3139L1.39288 12.7069C1.20541 12.5194 1.1001 12.265 1.1001 11.9999C1.1001 11.7347 1.20541 11.4804 1.39288 11.2929L3.99988 8.68588V4.99988C3.99988 4.73467 4.10524 4.48031 4.29278 4.29278C4.48031 4.10524 4.73467 3.99988 4.99988 3.99988H8.68588ZM11.9999 14.9999C12.7955 14.9999 13.5586 14.6838 14.1212 14.1212C14.6838 13.5586 14.9999 12.7955 14.9999 11.9999C14.9999 11.2042 14.6838 10.4412 14.1212 9.87856C13.5586 9.31595 12.7955 8.99988 11.9999 8.99988C11.2042 8.99988 10.4412 9.31595 9.87856 9.87856C9.31595 10.4412 8.99988 11.2042 8.99988 11.9999C8.99988 12.7955 9.31595 13.5586 9.87856 14.1212C10.4412 14.6838 11.2042 14.9999 11.9999 14.9999Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4757">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <MenuText>Account Setup</MenuText>
          </MenuContainer>
        </StyledNavLink>
        <StyledNavLink to="/">
          <MenuContainer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-logout-box-fill" clip-path="url(#clip0_1245_4765)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2ZM9 11V8L4 12L9 16V13H15V11H9Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1245_4765">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <MenuText>Logout</MenuText>
          </MenuContainer>
        </StyledNavLink>
      </LeftContainer>
      <RightContainer>
        <RightTopContainer>
          <SearchWrapper>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon size={17} color="#242424" />
          </SearchWrapper>{" "}
          <IconTag>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ri-notification-2-fill" clip-path="url(#clip0_1278_5392)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                    fill="#212121"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1278_5392">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <CountContainer1>{updateCount}</CountContainer1>
          </IconTag>
        </RightTopContainer>
      </RightContainer>
    </Container>
  );
};

export default PharmacistDashboard;
