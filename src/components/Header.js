import React from "react";
import Logo from "../images/Food_(156).svg";
//Animation
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      style={{
        background: "#0f2c5c",
        padding: "15px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <motion.img
          src={Logo}
          alt="pizzalogo"
          width="15%"
          height="15%"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        />
        <motion.div
          style={{
            marginLeft: 20,
            fontSize: 35,
            color: "#fcd200",
          }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: "0",
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          Pizza Customization
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
