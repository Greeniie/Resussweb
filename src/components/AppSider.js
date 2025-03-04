import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu, Typography } from "antd";
import { useEffect, useState } from "react";
import { GrDocumentTime } from "react-icons/gr";
import { RiUserLine, RiUserHeartLine, RiSettings2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Logosmall from "../assets/logo.png";
import miniLogo from "../assets/images/logo512.png";
import { toggleCollapseSider } from "../redux/appSlice";
import { AiOutlineLeft } from "react-icons/ai";
import { RiAdminLine, RiLoginBoxLine } from "react-icons/ri";
import {
  BiCategory,
  BiCreditCard,
  BiUserPlus,
  BiWallet,
  BiBriefcase,
  BiBook,
  BiNote,
  BiNotepad,
  BiTag,
} from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import {
  DashboardOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
  BorderRightOutlined,
  CommentOutlined,
  SyncOutlined,
  BranchesOutlined,
  BarcodeOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { getProfile } from "../redux/profileSlice";

const AppSider = () => {
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const { singleData } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(null);
  const { app } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    items.reduce((acc, curr) => {
      if (location.pathname.includes(curr.key)) {
        setCurrentPage(curr.key);
      }
      return acc;
    }, "appointments");
  }, [location.pathname]);

  const toggleSiderCollapse = () => {
    dispatch(toggleCollapseSider());
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const [items, setItems] = useState([
    getItem("Dashboard", "dashboard", <DashboardOutlined />),

    getItem("Users", "clients", <BiUserPlus size={20} />),
    getItem("Signups", "signups", <RiLoginBoxLine size={16} />),

    getItem("Articles", "articles", <BiBook />),
    getItem("Jobs", "jobs", <BiBriefcase size={20} />),
    getItem("Job Tags", "jobtags", <BiTag size={20} />),

    getItem("Roles", "roles", <RiUserLine size={16} />),
    getItem("Plans", "plans", <BiCategory size={20} />),
    getItem("Subscriptions", "subscriptions", <BiCreditCard size={16} />),
    getItem("Admins", "admins", <RiAdminLine size={20} />),

    getItem("Payments", "payments", <BiWallet size={16} />),
    getItem("Transaction logs", "transactions", <BiNotepad size={20} />),

    getItem("Reports", "reports", <CgNotes />),
    getItem("Reviews", "reviews", <BiNote size={20} />),
    getItem("Referral codes", "referral-codes", <BarcodeOutlined size={20} />),

    getItem("Settings", "settings", <RiSettings2Line size={16} />),

    getItem("Notifications", "notifications", <NotificationOutlined />),
    getItem("Contact-Support", "contacts", <ContactsOutlined />),
  ]);

  const appManagerItems = items.filter(
    (item) => item.key !== "payments" && item.key !== "subscriptions"
  );
  const contentCreatorItems = items.filter((item) =>
    ["articles", "referral-codes"].includes(item.key)
  );
  const marketingItems = items.filter((item) =>
    ["dashboard", "reports", "referral-codes"].includes(item.key)
  );
  const salesItems = items.filter((item) =>
    ["dashboard", "referral-codes"].includes(item.key)
  );
  const customerSupportItems = items.filter((item) =>
    [
      "dashboard",
      "clients",
      "referral-codes",
      "contacts",
      "notifications",
      "jobs",
    ].includes(item.key)
  );

  useEffect(() => {
    if (singleData?.level === 0) {
      setItems([...items]);
    } else if (singleData?.level === 1) {
      setItems([...appManagerItems]);
    } else if (singleData?.level === 2) {
      setItems([...contentCreatorItems]);
    } else if (singleData?.level === 3) {
      setItems([...customerSupportItems]);
    } else if (singleData?.level === 4) {
      setItems([...marketingItems]);
    } else if (singleData?.level === 5) {
      setItems([...salesItems]);
    }
  }, [singleData?.level]);

  const handleMenuClick = (values) => {
    navigate(`/${values.key}`);
    setCurrentPage(values.key);
  };

  return (
    <>
      <StyledLogo className="logo">
        {!app.siderCollapsed ? (
          <img
            style={{ padding: "5px", width: "auto", height: "40px" }}
            src={Logo}
            alt="resuss"
          />
        ) : (
          <img
            style={{ padding: "0", width: "auto", height: "50px" }}
            src={miniLogo}
            alt="resuss"
          />
        )}
      </StyledLogo>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={currentPage ? [currentPage] : []}
        style={{
          backgroundColor: "#330066",
          fontFamily: "DM Sans",
          overflowY: "scroll",
          height: "calc(100vh - 50px)",
        }}
        onClick={handleMenuClick}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            style={{
              backgroundColor:
                currentPage === item.key ? "#6633FF" : "transparent",
            }}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <Button
        style={{
          position: "absolute",
          top: "63px",
          width: app.siderCollapsed ? "30px" : "40px",
          right: "0",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          justifyContent: "center",
          color: "#330066",
          backgroundColor: "white",
        }}
        icon={
          <AiOutlineLeft
            style={{ transform: app.siderCollapsed && "rotate(180deg)" }}
            size={18}
            fill="#330066"
            color="#330066"
          />
        }
        block
        onClick={toggleSiderCollapse}
      ></Button>
    </>
  );
};

export default AppSider;

const StyledLogo = styled.div`
  display: flex;
  color: white;
  align-content: center;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #fff;
  h5 {
    color: white;
  }
`;
