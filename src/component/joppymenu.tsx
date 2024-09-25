import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import type { MenuProps } from "antd";
import { Menu, Tooltip, Row, Col } from "antd";

// Define MenuItem type
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: (
      <img
        src="../../developer.png"
        alt="Techies"
        style={{ width: "25px", height: "25px" }}
      />
    ),
    label: "Techies",
  },
  {
    key: "2",
    icon: (
      <img
        src="../../team-work.png"
        alt="Employers"
        style={{ width: "25px", height: "25px" }}
      />
    ),
    label: "Employers",
  },
  {
    key: "3",
    icon: (
      <img
        src="../../info.png"
        alt="About"
        style={{ width: "25px", height: "25px" }}
      />
    ),
    label: "About",
  },
  {
    key: "4",
    icon: (
      <img
        src="../../contact.png"
        alt="Contact"
        style={{ width: "25px", height: "25px" }}
      />
    ),
    label: "Contact",
  },
  {
    key: "sub1",
    label: "More",
    icon: (
      <img
        src="../../more.png"
        alt="More"
        style={{ width: "25px", height: "25px" }}
      />
    ),
    children: [
      { key: "5", label: "Explore companies" },
      { key: "6", label: "Candidates to your email" },
      { key: "7", label: "Tech Ecosystem Reports" },
      { key: "8", label: "Pricing" },
    ],
  },
];

interface JoppyMenuProps {
  collapsed: boolean; // Prop to receive collapsed state
  onToggle: () => void; // Prop to toggle the menu
}

const JoppyMenu: React.FC<JoppyMenuProps> = ({ collapsed, onToggle }) => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleMenuClick = (key: string) => {
    switch (key) {
      case "1":
        navigate("/techies");
        break;
      case "2":
        navigate("/employers");
        break;
      case "3":
        navigate("/about");
        break;
      case "4":
        navigate("/contact");
        break;
      case "5":
        navigate("/explore-companies");
        break;
      case "6":
        navigate("/candidates-email");
        break;
      case "7":
        navigate("/tech-reports");
        break;
      case "8":
        navigate("/pricing");
        break;
      default:
        break;
    }
  };

  return (
    <Row style={{ height: "100vh", overflow: "hidden", position: "fixed" }}>
      <Col style={{ padding: 0, height: "100%" }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          style={{
            width: collapsed ? 100 : 256,
            height: "100%",
            backgroundColor: "rgb(113, 159, 173)",
          }}
        >
          <Menu.Item
            key="toggle"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Tooltip title={collapsed ? "Expand" : "Collapse"}>
              <img
                src={collapsed ? "../../maximize.png" : "../../minimize.png"}
                alt="minmaxicon"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: 10,
                  cursor: "pointer",
                  backgroundColor: "#87CEEB",
                  borderRadius: "50%",
                }}
                onClick={onToggle}
              />
            </Tooltip>

            {!collapsed && (
              <span
                style={{
                  color: "black",
                  fontSize: 25,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  padding: "10px 15px",
                  borderRadius: "1000px",
                  backgroundColor: "#f0f0f0",
                  transition: "background-color 0.3s",
                }}
              >
                JOPPY
              </span>
            )}
          </Menu.Item>

          {items.map((item: any) =>
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child: any) => (
                  <Menu.Item
                    key={child.key}
                    onClick={() => handleMenuClick(child.key)}
                  >
                    {child.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                onClick={() => handleMenuClick(item.key)}
              >
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </Col>
    </Row>
  );
};

export default JoppyMenu;
